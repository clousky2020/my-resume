---
title: OKR 目标管理系统
slug: okr-platform
date: 2024-01-01
description: 企业级 OKR（目标与关键成果）管理平台，支持目标设定、关键结果追踪、任务管理、KPI 考核、周期报告等完整闭环。
tech:
  - Vue.js 2
  - TypeScript
  - Ant Design Vue
  - ECharts
  - CKEditor
  - Vuex
---

## 项目背景

OKR 目标管理系统帮助企业落地 OKR 管理方法论，实现目标对齐、进度透明、持续反馈，提升组织执行力。

## 技术架构

- **前端框架**: Vue.js 2.6 + TypeScript + Ant Design Vue 1.6
- **状态管理**: Vuex 3 + vuex-module-decorators
- **可视化**: ECharts 4 + vue-echarts + echarts-liquidfill
- **富文本编辑**: CKEditor 5
- **日历**: Vue Simple Calendar
- **国际化**: Vue i18n
- **构建工具**: Vue CLI 4

## 核心功能模块

### 目标管理 (OM)
- 目标创建、子目标拆解
- 关键结果设定、权重分配
- 目标对齐地图、进度可视化

### 任务管理 (TM)
- 个人工作台、任务看板
- 项目分组、任务模板
- 任务监督、执行跟踪

### 绩效管理 (PM)
- KPI 考核、评估表单
- 绩效档案、历史记录
- 部门/个人绩效看板

### 流程审批 (BPM)
- 流程定义、审批配置
- 流程实例、审批记录
- 打印导出

## 报告系统

- 日清、周清、月清、季清、年清
- 系统自动生成 + 手动填报
- 报告模板、打印导出

## 项目亮点

1. **完整 OKR 闭环**: 目标→关键结果→任务→里程碑
2. **多角色工作台**: 执行/监督/管理/考核
3. **可视化大屏**: ECharts liquidfill 水球图
4. **多模式部署**: 支持 beta/stiei/hhtz 等多套环境
5. **政务版适配**: 专门的政务首页变体

## 部署架构

- 多环境配置支持
- 部署脚本自动化
- Husky + commitlint 规范
