# 个人简历网站

一个基于 Next.js + TypeScript + Tailwind CSS 的现代化个人简历网站。

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 构建生产版本

```bash
# 构建静态文件
npm run build

# 静态文件将生成在 out/ 目录
```

## 📝 自定义内容

编辑 `src/lib/data.ts` 文件来更新个人信息：

- `profile`: 个人基本信息
- `skills`: 专业技能
- `experiences`: 工作经历
- `projects`: 项目作品

## 🎨 功能特性

- ✅ 响应式设计
- ✅ 深色模式支持
- ✅ SEO优化
- ✅ 静态导出
- ✅ GitHub Pages部署

## 📦 部署到GitHub Pages

1. 创建GitHub仓库
2. 推送代码到main分支
3. GitHub Actions将自动部署
4. 访问 `https://your-username.github.io/your-repo-name`

## 🛠️ 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS 4
- React 18

## 📄 项目结构

```
resume-website/
├── src/
│   ├── app/              # 页面
│   ├── components/       # 组件
│   │   └── sections/    # 页面模块
│   └── lib/             # 工具和数据
├── public/              # 静态资源
└── .github/             # GitHub配置
```

## 📖 许可证

MIT License
