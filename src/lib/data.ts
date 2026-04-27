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
    items: ['Ruby on Rails', 'PostgreSQL', 'Redis'],
  },
  {
    category: '前端技术',
    items: ['Vue.js', 'JavaScript/TypeScript', 'HTML/CSS'],
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
      '参与开发并运维了多个微信小程序，用于支撑高并发、高公开性的线上公共服务活动（如摇号），活动期间累计服务用户超1万人次',
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
  // 政务数字化平台
  {
    name: '政务综合管理平台',
    slug: 'gov-platform',
    category: '政务平台',
    description: '面向政府机构的综合性数字化管理平台，涵盖公文流转、会议管理、督查督办、绩效考核等核心政务功能模块。系统采用微服务架构，支持高并发访问，已稳定运行超过4年。',
    technologies: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      '实现完整的公文流转审批流程，支持多级审批和会签',
      '会议管理系统支持会议室预约、会议通知、会议纪要等功能',
      '督查督办模块实现任务下发、进度跟踪、结果反馈闭环',
      '系统支持多租户架构，可同时服务多个政府部门',
    ],
    image: '/images/projects/gov-platform.svg',
  },
  {
    name: '党建信息化系统',
    slug: 'party-build',
    category: '政务平台',
    description: '为基层党组织打造的党建信息化平台，实现党员管理、组织生活、学习教育、考核评价等功能，助力党建工作数字化转型。',
    technologies: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'Redis'],
    highlights: [
      '党员信息管理系统，支持党员发展全流程跟踪',
      '三会一课在线记录，自动生成组织生活台账',
      '在线学习平台，支持视频课程、在线考试',
      '党员积分系统，实现量化考核和激励机制',
    ],
    image: '/images/projects/party-build.svg',
  },
  {
    name: '房产管理系统',
    slug: 'estate-platform',
    category: '政务平台',
    description: '面向房产管理部门的综合性业务系统，涵盖房源管理、交易监管、数据统计分析等功能，实现房产信息全生命周期管理。',
    technologies: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'Redis'],
    highlights: [
      '房源信息库建设，实现一房一档精细化管理',
      '交易流程线上化，缩短业务办理时间',
      '数据可视化大屏，实时展示房产市场动态',
      '与多个外部系统对接，实现数据互联互通',
    ],
    image: '/images/projects/estate-platform.svg',
  },
  {
    name: '教育管理平台',
    slug: 'education-platform',
    category: '政务平台',
    description: '服务于教育行业的综合管理平台，涵盖学校管理、教师管理、学生管理、课程管理等功能，支持多校区协同办公。',
    technologies: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'Redis'],
    highlights: [
      '多校区统一管理，支持分级授权',
      '教师档案管理系统，支持职称评定流程',
      '学生信息管理，支持学籍异动跟踪',
      '课程排课系统，智能解决冲突问题',
    ],
    image: '/images/projects/education-platform.svg',
  },

  // 微信小程序
  {
    name: '投标卫士小程序',
    slug: 'bid-guard',
    category: '小程序',
    description: '面向招投标行业的移动应用，提供招标信息查询、投标提醒、资质管理等功能，帮助用户及时获取商机。',
    technologies: ['Taro', 'Vue 3', 'TypeScript', 'Node.js'],
    highlights: [
      '实时推送招标信息，支持关键词订阅',
      '投标日历功能，自动提醒重要节点',
      '企业资质管理，一键生成投标文件',
      '支持离线浏览，无网络也能查看已缓存信息',
    ],
    image: '/images/projects/bid-guard.svg',
  },
  {
    name: '电子卡小程序',
    slug: 'ecard-mini',
    category: '小程序',
    description: '电子卡管理系统移动端，支持卡片申领、余额查询、消费记录查看、在线充值等功能，服务超1万用户。',
    technologies: ['Taro', 'Vue 3', 'TypeScript', 'Redis'],
    highlights: [
      '高并发架构设计，支持大规模用户同时访问',
      '实时余额同步，消费记录即时推送',
      '支持多种充值方式，包括微信支付',
      '完善的权限控制，保障用户资金安全',
    ],
    image: '/images/projects/ecard-mini.svg',
  },
  {
    name: '人才住房小程序',
    slug: 'talent-housing',
    category: '小程序',
    description: '人才住房申请和管理平台，支持在线申请、资格审核、摇号选房等功能，累计服务用户超1万人次。',
    technologies: ['Taro', 'Vue 3', 'TypeScript', 'Node.js'],
    highlights: [
      '在线申请流程，减少线下跑腿次数',
      '摇号系统公平透明，支持实时直播',
      '资格审核自动化，缩短审批周期',
      '选房系统支持VR看房，提升用户体验',
    ],
    image: '/images/projects/talent-housing.svg',
  },

  // Rails 插件生态
  {
    name: 'Rails BPM 工作流引擎',
    slug: 'rails-bpm',
    category: 'Rails 插件',
    description: '基于 Ruby on Rails 的业务流程管理(BPM)引擎，提供灵活的工作流配置、执行和管理功能，可用于构建各类业务审批流程。',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'ActionCable'],
    highlights: [
      '可视化流程设计器，支持拖拽配置工作流',
      '支持多种节点类型：开始、审批、条件、结束等',
      '流程实例运行时引擎，支持动态流转',
      '完善的权限控制和任务分配机制',
    ],
    image: '/images/projects/rails-bpm.svg',
  },
  {
    name: 'Rails OPM 人事管理系统',
    slug: 'rails-opm',
    category: 'Rails 插件',
    description: '人事管理系统的 Ruby gem 包，提供加班申请、请假管理、职位变动、员工档案等核心人事功能。',
    technologies: ['Ruby on Rails', 'PostgreSQL'],
    highlights: [
      '加班申请管理，支持时间重叠验证',
      '请假系统支持年假、调休、病假等多种类型',
      '职位变动流程，涵盖入职、调动、离职',
      '部门层级结构管理，支持多级组织架构',
    ],
    image: '/images/projects/rails-opm.svg',
  },
  {
    name: 'Rails Notify 通知集成',
    slug: 'rails-notify',
    category: 'Rails 插件',
    description: '统一通知服务插件，集成短信、微信、站内信（WebSocket）等多种通知渠道，提供一致的通知发送接口。',
    technologies: ['Ruby on Rails', 'Redis', 'WebSocket'],
    highlights: [
      '统一通知接口，支持多渠道发送',
      '站内信基于 WebSocket 实现实时推送',
      '短信集成多家服务商，支持自动切换',
      '通知模板管理，支持变量替换',
    ],
    image: '/images/projects/rails-notify.svg',
  },
// 企业级 Web 应用
  {
    name: '四维优校综合管理平台',
    slug: 'campus-platform',
    category: '企业级 Web',
    description: '面向高校/教育机构的综合管理平台，覆盖教学管理、人事管理、财务管理、宿舍管理、OA审批等多个业务模块，支持多租户部署。',
    technologies: ['Vue.js 2', 'TypeScript', 'Ant Design Vue', 'ECharts', 'CKEditor', 'Vuex', 'WebSocket'],
    highlights: [
      '35+业务模块，含教学、人事、财务、合同、宿舍、应急等',
      '支持 FullCalendar 日程管理、CKEditor 富文本编辑',
      'G2 数据可视化、QRCode 二维码、ECharts 图表大屏',
      '多租户架构，多套部署配置（测试/正式/校区/东海等）',
    ],
    image: '/images/projects/campus-platform.svg',
  },
  {
    name: '智慧巡察平台',
    slug: 'tour-inspection',
    category: '企业级 Web',
    description: '智慧巡察管理平台，提供巡察计划、甘特图排期、OnlyOffice 在线协作编辑、档案管理等功能，支持多角色分级授权。',
    technologies: ['Vue.js 3', 'TypeScript', 'Ant Design Vue 3', 'Dhtmlx Gantt', 'OnlyOffice', 'ECharts GL'],
    highlights: [
      '甘特图排期，支持项目任务分阶段管理',
      'OnlyOffice 在线协作编辑，支持多人实时文档',
      'ECharts GL 3D 可视化大屏',
      '135+ 业务路由，19个引擎模块高度解耦',
    ],
    image: '/images/projects/tour-inspection.svg',
  },
  {
    name: '投标管理系统',
    slug: 'bid-guard-web-pro',
    category: '企业级 Web',
    description: '面向招投标行业的专业管理系统，提供流程审批、资源管理、AI 智能问答、文档编辑、实时通知等完整功能。',
    technologies: ['Vue.js 3', 'TypeScript', 'Vuex', 'Ant Design Vue 3', 'ECharts', 'Three.js', 'ActionCable', 'WindiCSS'],
    highlights: [
      '引擎化模块架构，RES/BPM/AIEST/CHAT 等多引擎解耦',
      'Three.js 3D 可视化，AntV G6 流程图，ECharts 大屏',
      'CKEditor + WangEditor 双富文本，docxtemplater 文档生成',
      'ActionCable WebSocket 实时通知，DingTalk/WeChat 双端集成',
    ],
    image: '/images/projects/bid-guard-web-pro.svg',
  },
  {
    name: 'OKR 目标管理系统',
    slug: 'okr-platform',
    category: '企业级 Web',
    description: '企业级 OKR（目标与关键成果）管理平台，支持目标设定、关键结果追踪、任务管理、KPI 考核、周期报告等完整闭环。',
    technologies: ['Vue.js 2', 'TypeScript', 'Ant Design Vue', 'ECharts', 'CKEditor', 'Vuex'],
    highlights: [
      'OKR 全生命周期：目标→关键结果→任务→里程碑',
      '多角色工作台（执行/监督/管理），支持绩效考核',
      '多模式构建（beta/stiei/hhtz），含政务版首页',
      'ECharts liquidfill 图表、自定义大屏模板配置',
    ],
    image: '/images/projects/okr-platform.svg',
  },

  // 企业级 API 服务
  {
    name: '科技成果转化平台 API',
    slug: 'tech-transfer',
    category: '企业级 API',
    description: '科技技术转移与成果转化平台后端 API，集成技术供需对接、CRM 管理、招标评标、即时通讯、展会管理等多业务域。',
    technologies: ['Ruby on Rails 7.1', 'Ruby 3.2', 'MySQL', 'PostgreSQL', 'ClickHouse', 'Sidekiq', 'Redis'],
    highlights: [
      'MySQL + PostgreSQL + ClickHouse 三数据库架构',
      '30+ 个 rails_* 领域引擎插件，高内聚低耦合',
      'Sidekiq 异步任务，WebSocket 实时消息',
      '对接多个第三方服务：微信/钉钉/短信/直播',
    ],
    image: '/images/projects/tech-transfer.svg',
  },
  {
    name: '房产销售管理平台 API',
    slug: 'estate-sales',
    category: '企业级 API',
    description: '商业地产销售管理后端 API，涵盖线索管理、楼盘销售、合同签约、回款跟踪、工程监理等核心业务全流程。',
    technologies: ['Ruby on Rails 6.1', 'PostgreSQL', 'Sidekiq', 'Redis'],
    highlights: [
      '线索到成交全链路管理，含退款/分期/合同撤销',
      '工程监理：日常/周/月检查，进度跟踪，问题登记',
      'ActiveResource 调用其他 API，财务成本计划管理',
      '12+ 个 rails_* 引擎插件支撑业务模块',
    ],
    image: '/images/projects/estate-sales.svg',
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
