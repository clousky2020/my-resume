'use client'

import { projects } from '@/lib/data'
import Link from 'next/link'

// 类别配置
const categoryConfig: Record<string, { label: string; gradient: string; textColor: string }> = {
  '政务平台': { label: '政务平台', gradient: 'from-blue-400 to-blue-600', textColor: 'text-blue-600 dark:text-blue-400' },
  '小程序': { label: '微信小程序', gradient: 'from-green-400 to-emerald-600', textColor: 'text-green-600 dark:text-green-400' },
  'Rails 插件': { label: 'Rails 插件', gradient: 'from-purple-400 to-purple-600', textColor: 'text-purple-600 dark:text-purple-400' },
  '企业级 Web': { label: '企业级 Web 应用', gradient: 'from-cyan-400 to-teal-600', textColor: 'text-cyan-600 dark:text-cyan-400' },
  '企业级 API': { label: '企业级 API 服务', gradient: 'from-amber-400 to-orange-600', textColor: 'text-amber-600 dark:text-amber-400' },
}

export default function ProjectsSection() {
  // 按类别分组
  const groupedProjects = projects.reduce((acc, project) => {
    const category = project.category || '其他'
    if (!acc[category]) acc[category] = []
    acc[category].push(project)
    return acc
  }, {} as Record<string, typeof projects>)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          项目作品
        </h2>

        {/* 按类别分组展示 */}
        {Object.entries(groupedProjects).map(([category, categoryProjects]) => {
          const config = categoryConfig[category] || { label: category, gradient: 'from-gray-400 to-gray-600', textColor: 'text-gray-600 dark:text-gray-400' }

          return (
            <div key={category} className="mb-16 last:mb-0">
              {/* 类别标题 */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-2 h-8 ${config.textColor} rounded-full`} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {config.label}
                </h3>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  {categoryProjects.length} 个项目
                </span>
              </div>

              {/* 项目卡片网格 */}
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map((project, index) => (
                  <Link
                    key={index}
                    href={`/projects/${project.slug}`}
                    className="group bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 block"
                  >
                    {/* 项目图片占位 */}
                    <div className={`h-48 bg-gradient-to-br ${config.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative`}>
                      <span className="text-white text-5xl font-bold opacity-80">
                        {project.name.charAt(0)}
                      </span>

                      {/* 类别标签 */}
                      <span className="absolute top-3 right-3 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {config.label}
                      </span>
                    </div>

                    {/* 项目信息 */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">
                        {project.description}
                      </p>

                      {/* 技术标签 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* 查看详情 */}
                      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                        查看详情
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}

        {/* 提示信息 */}
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            点击卡片查看项目详细信息
          </p>
        </div>
      </div>
    </section>
  )
}
