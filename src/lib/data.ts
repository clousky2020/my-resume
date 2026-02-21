export const profile = {
  name: '李文强',
  title: '全栈工程师',
  email: 'clousky@qq.com',
  phone: '15067703927',
  location: '温州乐清',
  bio: '5年全栈开发经验（Ruby on Rails + Vue.js），能独立负责多个中大型项目的全生命周期，包括技术选型、核心开发、部署运维、迭代优化及客户对接，具备出色的端到端交付能力。',
  avatar: '/images/avatar.jpg',
  social: {
    github: 'https://github.com/clousky2020',
    email: 'mailto:clousky@qq.com',
  },
}

export const skills = [
  {
    category: '后端技术',
    items: ['Ruby on Rails',  'PostgreSQL', 'Redis'],
  },
  {
    category: '前端技术',
    items: ['Vue.js', 'JavaScript/TypeScript', 'HTML/CSS', '微信小程序'],
  },
  {
    category: '工具和其他',
    items: ['Git', 'Docker', 'Linux', 'Excel/VBA'],
  },
]

export const experiences = [
  {
    company: '杭州拓体信息科技有限公司',
    position: '全栈工程师',
    period: '2020.01 - 2026.01',
    description: '作为公司在杭州区域的唯一技术负责人，全面接管所有在杭项目的技术工作。独立承担包括需求沟通、方案设计、开发测试、部署上线、后期运维、用户培训及部分商务报告撰写在内的全套职责。',
    achievements: [
      '成功主导并交付3个大型政务数字化平台，并使其进入长期稳定运营阶段，最长的已持续维护超过4年，系统可用性保持在99.9%以上',
      '参与开发并运维了2个微信小程序，用于支撑高并发、高公开性的线上公共服务活动（如摇号），活动期间累计服务用户超1万人次',
      '通过对历史系统进行参数化配置改造与代码重构，将新需求的平均响应部署时间缩短约30%',
      '主导1个创新型AI应用项目的原型开发与快速迭代，在需求高度不确定的情况下，与客户进行了超过50轮次的高频沟通与演示',
      '深度参与超过8个政府及国有企业数字化转型项目，对政务系统的业务流程、合规要求、安全规范及沟通模式有深刻理解和实践经验',
    ],
  },
  {
    company: '浙江顾丰纺织有限公司',
    position: '车间主任',
    period: '2018.07 - 2020.01',
    description: '负责车间生产管理工作，同时利用技术手段提升管理效率。',
    achievements: [
      '基于Excel+VBA开发了一套生产资料管理系统，包含日生产表统计、进出料管理、人员管理、工资结算、自动统计供货商和客户的月/年对账单等',
      '系统操作简单，后续人员只要会打字输入即可使用，显著提升了车间管理效率',
    ],
  },
  {
    company: '浙江三奇机械设备有限公司',
    position: '机械设计/制造',
    period: '2017.09 - 2018.04',
    description: '从事机械设计与制造工作。',
    achievements: [
      '改进中走丝机器结构，研发新的机器型号',
    ],
  },
]

export const projects = [
  {
    name: '政务数字化平台',
    description: '大型政务系统，包含多个子模块，服务政府及国有企业数字化转型。系统采用Ruby on Rails + Vue.js技术栈，支持高并发访问，已稳定运行超过4年。',
    technologies: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker'],
    link: '#',
    image: '/images/project1.jpg',
  },
  {
    name: '公共服务小程序',
    description: '用于支撑高并发、高公开性的线上公共服务活动（如摇号），活动期间累计服务用户超1万人次，保障了零重大事故。',
    technologies: ['微信小程序', 'Node.js', 'Redis'],
    link: '#',
    image: '/images/project2.jpg',
  },
  {
    name: 'AI应用原型项目',
    description: '创新型AI应用项目的原型开发与快速迭代，在需求高度不确定的情况下，与客户进行了超过50轮次的高频沟通与演示，深度磨合产品形态。',
    technologies: ['Ruby on Rails', 'Vue.js', 'AI API', 'PostgreSQL'],
    link: '#',
    image: '/images/project3.jpg',
  },
]

export const advantages = [
  {
    title: '全栈技术与独立交付能力',
    description: '5年全栈开发经验（Ruby on Rails + Vue.js），能独立负责多个中大型项目的全生命周期，包括技术选型、核心开发、部署运维、迭代优化及客户对接，具备出色的端到端交付能力。',
  },
  {
    title: '复杂业务与政务项目经验',
    description: '深度参与超过8个政府及国有企业数字化转型项目，对政务系统的业务流程、合规要求、安全规范及沟通模式有深刻理解和实践经验，能快速适应复杂场景。',
  },
  {
    title: '多角色协作与抗压能力',
    description: '在资源有限的环境中，长期同时负责3-4个项目的并行开发与维护，扮演了技术主R、客户接口人、技术客服乃至部分商务支持的综合角色，练就了极强的多任务处理与压力管理能力。',
  },
]
