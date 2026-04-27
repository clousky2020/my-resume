---
title: Rails BPM 工作流引擎
date: 2020-01-01
description: 基于 Ruby on Rails 的业务流程管理(BPM)引擎，提供灵活的工作流配置、执行和管理功能。
tech: [Ruby on Rails, PostgreSQL, ActionCable]
---

## 项目概述

RailsBpm 是一个基于 Ruby on Rails 的业务流程管理(BPM)引擎，提供完整的工作流定义、执行和管理功能。已集成到多个政务系统中，处理复杂的审批流程。

## 核心功能

### 工作流定义

- 可视化流程设计器
- 支持 BPMN 2.0 规范
- 流程模板复制和继承
- 版本管理和回滚

### 节点类型

- **开始节点**：流程发起
- **审批节点**：单签、会签审批
- **处理节点**：任务处理
- **条件节点**：分支判断
- **结束节点**：流程终止

### 运行时引擎

- 流程实例管理
- 节点状态跟踪
- 自动路由计算
- 动态表单处理

### 权限控制

- 用户任务分配
- 角色权限配置
- 委托代办设置
- 权限继承机制

## 技术实现

### 核心模型

```ruby
# 工作流定义
class Workflow < ApplicationRecord
  has_many :places  # 节点
  has_many :transitions  # 流转
end

# 流程实例
class Instance < ApplicationRecord
  belongs_to :workflow
  has_many :tokens  # 令牌
end
```

### 状态机设计

- 使用 AASM 管理状态转换
- 支持自定义回调
- 完整的状态变更日志

### 实时通知

- 基于 ActionCable 的 WebSocket
- 任务到达即时推送
- 流程超时预警

## 项目亮点

1. **开箱即用**：安装 gem 后即可使用
2. **灵活配置**：支持复杂业务流程配置
3. **易于集成**：可嵌入任何 Rails 项目
4. **功能完整**：涵盖工作流的各个方面
