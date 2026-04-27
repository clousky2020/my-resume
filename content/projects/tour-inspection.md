---
title: 智慧巡察平台
slug: tour-inspection
date: 2024-01-01
description: 智慧巡察管理平台，提供巡察计划、甘特图排期、OnlyOffice 在线协作编辑、档案管理等功能，支持多角色分级授权。
tech:
  - Vue.js 3
  - TypeScript
  - Ant Design Vue 3
  - Dhtmlx Gantt
  - OnlyOffice
  - ECharts GL
---

## 项目背景

智慧巡察平台是为政府/企业打造的巡察工作数字化管理平台，支持巡察计划制定、任务分配、进度跟踪、成果归档等全流程管理。

## 技术架构

- **前端框架**: Vue.js 3.3 + TypeScript + Ant Design Vue 3.2
- **项目管理**: Dhtmlx Gantt 8.0 甘特图
- **在线文档**: OnlyOffice Document Editor
- **流程图**: Vue Flow 流程图编辑
- **可视化**: ECharts + ECharts GL 3D 图表
- **富文本**: WangEditor + CKEditor 双编辑器
- **样式**: WindiCSS + Less + Stylus

## 核心功能模块

### 巡察计划
- 项目创建、阶段划分
- 甘特图排期，拖拽调整
- 任务分配、里程碑设置

### 任务执行
- 任务状态跟踪
- 问题登记、整改跟踪
- 进度汇报、成果上传

### 文档协作
- OnlyOffice 在线协作编辑
- 多人实时编辑同一文档
- 版本管理、历史记录

### 数据分析
- ECharts GL 3D 可视化大屏
- 自定义数据模板配置
- 多维度统计分析

## 项目亮点

1. **甘特图排期**: Dhtmlx Gantt 专业项目管理
2. **在线协作**: OnlyOffice 多人实时编辑文档
3. **3D 大屏**: ECharts GL 三维数据可视化
4. **模块化引擎**: 19个业务引擎解耦设计
5. **灵活扩展**: 135+ 路由支持多场景

## 部署架构

- 支持保密模式构建（secrecy）
- Docker 容器化部署
- 与其他系统对接（ActionCable）
