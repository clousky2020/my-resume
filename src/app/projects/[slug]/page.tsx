import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjectContentHtml, getAllProjects } from '@/lib/projects'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: '项目未找到',
    }
  }

  return {
    title: `${project.title} - 李文强的简历`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const contentHtml = await getProjectContentHtml(project)

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 导航栏 */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.date}
              </span>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* 技术栈 */}
            {project.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, index) => (
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

          {/* 项目封面图 */}
          <div className="mb-12">
            <div className="h-64 md:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden">
              <span className="text-white text-6xl font-bold">{project.title.charAt(0)}</span>
            </div>
          </div>

          {/* Markdown 内容 */}
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
    </main>
  )
}
