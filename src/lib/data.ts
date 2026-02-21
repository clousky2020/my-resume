export const profile = {
  name: '张三',
  title: '前端开发工程师',
  email: 'zhangsan@example.com',
  phone: '138-0000-0000',
  location: '杭州, 中国',
  bio: '5年以上前端开发经验，专注于React和Vue技术栈，热衷于用户体验和性能优化。',
  avatar: '/images/avatar.jpg',
  social: {
    github: 'https://github.com/zhangsan',
    linkedin: 'https://linkedin.com/in/zhangsan',
    email: 'mailto:zhangsan@example.com',
  },
}

export const skills = [
  {
    category: '前端技术',
    items: [
      { name: 'React', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: '后端技术',
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'PostgreSQL', level: 65 },
    ],
  },
  {
    category: '工具和其他',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'Webpack', level: 75 },
    ],
  },
]

export const experiences = [
  {
    company: 'ABC科技有限公司',
    position: '高级前端工程师',
    period: '2021.03 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。',
    achievements: [
      '主导重构前端架构，将首屏加载时间优化40%',
      '搭建组件库和开发规范，提高团队开发效率30%',
      '负责技术选型和团队培训，培养3名初级工程师',
    ],
  },
  {
    company: 'XYZ互联网公司',
    position: '前端工程师',
    period: '2019.06 - 2021.02',
    description: '参与电商平台的前端开发和维护工作。',
    achievements: [
      '开发多个核心业务模块，服务用户超百万',
      '优化购物车和支付流程，提升转化率15%',
      '参与前端性能监控系统的设计与实现',
    ],
  },
]

export const projects = [
  {
    name: '企业管理系统',
    description: '基于React + TypeScript的企业级管理系统，包含权限管理、数据可视化等模块。',
    technologies: ['React', 'TypeScript', 'Ant Design', 'Node.js'],
    link: 'https://github.com/zhangsan/admin-system',
    image: '/images/project1.jpg',
  },
  {
    name: '电商小程序',
    description: '使用Taro开发的跨平台电商小程序，支持微信、支付宝等多个平台。',
    technologies: ['Taro', 'React', 'TypeScript', 'Redux'],
    link: 'https://github.com/zhangsan/mini-shop',
    image: '/images/project2.jpg',
  },
  {
    name: '个人博客',
    description: '基于Next.js的个人技术博客，支持Markdown写作和SEO优化。',
    technologies: ['Next.js', 'Tailwind CSS', 'MDX'],
    link: 'https://github.com/zhangsan/blog',
    image: '/images/project3.jpg',
  },
]
