'use client'

import { projects } from '@/lib/data'
import Link from 'next/link'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          项目作品
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 block"
            >
              {/* 项目图片 */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-6xl font-bold">
                  {project.name.charAt(0)}
                </span>
              </div>

              {/* 项目信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* 查看详情提示 */}
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
