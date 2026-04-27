---
title: 房产销售管理平台 API
slug: estate-sales
date: 2024-01-01
description: 商业地产销售管理后端 API，涵盖线索管理、楼盘销售、合同签约、回款跟踪、工程监理等核心业务全流程。
tech:
  - Ruby on Rails 6.1
  - PostgreSQL
  - Sidekiq
  - Redis
---

## 项目背景

房产销售管理平台为房地产企业提供从线索到成交的全流程数字化管理，覆盖销售、合同、回款、监理等核心业务。

## 技术架构

- **框架**: Ruby on Rails 6.1 + Ruby 3.0
- **数据库**: PostgreSQL
- **缓存**: Redis
- **异步任务**: Sidekiq + Sidekiq-Scheduler
- **数据处理**: deep_pluck + groupdate + ruby-pinyin
- **跨服务**: ActiveResource 调用其他 API
- **部署**: Mina + Mina-Multistage

## 核心业务域

### 线索管理 (invest)
- 线索录入、跟进记录
- 产品库、价格管理
- LBS 定位、智能推荐

### 销售管理 (sale)
- 客户管理、来访登记
- 认购签约、合同管理
- 折扣审批、退款处理

### 楼盘管理 (house)
- 项目、楼栋、单元
- 房源状态、价格控制
- 销控管理

### 工程监理 (ecm)
- 检查项管理、进度跟踪
- 问题登记、整改闭环
- 日报/周报/月报

### 财务管理 (finance)
- 科目设置、合同计划
- 付款申请、成本核算

## 项目亮点

1. **全链路管理**: 线索→跟进→认购→签约→回款→退款
2. **多角色权限**: 渠道/案场/财务/管理层分级授权
3. **工程监理**: 质量/进度/问题全流程闭环
4. **跨服务调用**: ActiveResource 对接其他业务系统
5. **数据导出**: Excel 报表、合同打印模板

## 部署架构

- 多环境配置（staging/production）
- Docker 容器化部署
- Nginx 反向代理
