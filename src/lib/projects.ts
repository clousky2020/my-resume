import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Project {
  slug: string
  title: string
  date: string
  description: string
  tech: string[]
  content: string
}

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): Project[] {
  // 如果目录不存在，返回空数组
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tech: data.tech || [],
        content: '',
      }
    })

  return allProjects.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    
    // 如果文件不存在，返回 null
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tech: data.tech || [],
      content,
    }
  } catch {
    return null
  }
}

export async function getProjectContentHtml(project: Project): Promise<string> {
  const processedContent = await remark().use(html).process(project.content)
  return processedContent.toString()
}
