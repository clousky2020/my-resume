import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjectContentHtml, getAllProjects } from '@/lib/projects'
import { projects } from '@/lib/data'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const markdownProjects = getAllProjects()
  // 合并 markdown 和静态数据定义的项目
  const allSlugs = [
    ...markdownProjects.map((p) => p.slug),
    ...projects.map((p) => p.slug)
  ]
  return Array.from(new Set(allSlugs)).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params

  // 优先从静态数据查找
  const staticProject = projects.find(p => p.slug === slug)
  const markdownProject = getProjectBySlug(slug)
  const project = staticProject || markdownProject

  if (!project) {
    return { title: '项目未找到' }
  }

  // 兼容两种数据格式
  const title = (project as any).name || (project as any).title || ''
  return {
    title: `${title} - 李文强的简历`,
    description: (project as any).description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params

  // 优先从静态数据查找
  const staticProject = projects.find(p => p.slug === slug)
  const markdownProject = getProjectBySlug(slug)

  // 合并数据：静态数据优先，补充 markdown 内容
  const project = staticProject ? {
    ...staticProject,
    content: markdownProject?.content || ''
  } : markdownProject

  if (!project) {
    notFound()
  }

  const contentHtml = (project as any).content ? await getProjectContentHtml(project as any) : ''

  // 项目亮点
  const highlights = (project as any).highlights || []

  // 兼容两种数据格式
  const projectName = (project as any).name || (project as any).title || ''
  const projectDescription = (project as any).description || ''
  const projectTechnologies = (project as any).technologies || []
  const projectCategory = (project as any).category

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 导航栏 */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/#projects"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </div>
      </nav>

      {/* 项目内容 */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 项目标题区 */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              {projectCategory && (
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                  {projectCategory}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {projectName}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {projectDescription}
            </p>

            {/* 技术栈 */}
            {projectTechnologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {projectTechnologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* 项目亮点卡片 */}
          {highlights && highlights.length > 0 && (
            <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                项目亮点
              </h2>
              <ul className="space-y-3">
                {highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Markdown 内容 */}
          {contentHtml && (
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          )}

          {/* 如果没有 markdown 内容，显示技术栈和亮点 */}
          {!contentHtml && (
            <div className="space-y-8">
              <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  技术架构
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  本项目采用 {projectTechnologies.join('、')} 等技术栈开发，实现了高效稳定的业务功能。
                </p>
              </section>
            </div>
          )}
        </div>
      </article>
    </main>
  )
}
