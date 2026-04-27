---
title: 投标管理系统
slug: bid-guard-web-pro
date: 2024-01-01
description: 面向招投标行业的专业管理系统，提供流程审批、资源管理、AI 智能问答、文档编辑、实时通知等完整功能。
tech:
  - Vue.js 3
  - TypeScript
  - Vuex
  - Ant Design Vue 3
  - ECharts
  - Three.js
  - ActionCable
  - WindiCSS
---

## 项目背景

投标管理系统是为招投标行业打造的专业管理平台，集成了流程审批、资源管理、AI 智能助手、文档生成等核心功能，帮助企业高效管理投标业务。

## 技术架构

- **前端框架**: Vue.js 3.3 + TypeScript + Ant Design Vue 3.2
- **状态管理**: Vuex 4 + vuex-persistedstate
- **3D 可视化**: Three.js
- **图表**: ECharts + echarts-gl + echarts-liquidfill + echarts-wordcloud
- **流程图**: AntV G6 拓扑图
- **流编辑器**: Vue Flow 流程图
- **富文本**: WangEditor + CKEditor 双编辑器
- **文档生成**: docxtemplater + PizZip + pdfjs-dist
- **实时通信**: Rails ActionCable WebSocket
- **第三方**: 微信 JS SDK + 钉钉 JS API

## 核心功能模块

### 业务流程管理 (BPM)
- 流程定义、规则配置
- 流程实例、审批记录
- 统计分析、效率监控

### 资源管理 (RES)
- 成员、部门、组织架构
- 职务、身份、权限配置
- 多租户、多角色支持

### AI 智能助手 (IEST)
- AI 对话问答
- 智能消息推送
- AI 辅助文档处理

### 文档管理
- 模板管理、文档生成
- Excel 导入导出
- PDF 预览打印

## 项目亮点

1. **引擎化架构**: 10+ 独立引擎模块解耦
2. **3D 可视化**: Three.js 场景渲染
3. **AI 集成**: 大模型对话助手
4. **实时通信**: ActionCable WebSocket
5. **文档生成**: 自动化标书生成

## 部署架构

- 多环境配置（dev/test/prod/preview/secrecy）
- Docker 容器化部署
- Husky + lint-staged 代码规范
