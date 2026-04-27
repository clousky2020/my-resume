---
title: Rails Notify 通知集成
date: 2021-01-01
description: 统一通知服务插件，集成短信、微信、站内信（WebSocket）等多种通知渠道。
tech: [Ruby on Rails, Redis, WebSocket]
---

## 项目概述

RailsNotify 是一个统一通知服务 gem，提供短信、微信、站内信等多种通知渠道的集成。通过统一的接口，开发者可以方便地在应用中发送各类通知。

## 支持的渠道

### 短信通知

- 支持阿里云、腾讯云等短信服务商
- 短信模板管理
- 发送状态追踪
- 失败自动重试

### 微信通知

- 微信公众号模板消息
- 小程序订阅消息
- 企业微信消息

### 站内信（WebSocket）

- 基于 ActionCable 实现
- 实时消息推送
- 历史消息存储
- 未读消息标记

## 技术实现

### 统一通知接口

```ruby
# 发送通知
Notifier.send(
  user: current_user,
  channel: :sms,
  template: 'verification_code',
  params: { code: '123456' }
)

# 同时发送多个渠道
Notifier.send_multi(
  user: current_user,
  channels: [:sms, :wechat],
  template: 'order_reminder',
  params: { order_no: 'xxx' }
)
```

### 异步处理

- 使用 Sidekiq 后台处理
- 支持定时发送
- 发送队列管理

### 模板管理

- YAML 配置模板
- 变量替换
- 多语言支持

## 项目亮点

1. **统一接口**：不同渠道使用相同接口
2. **易于扩展**：可方便添加新渠道
3. **异步发送**：不影响主业务性能
4. **状态追踪**：完整的消息发送日志

## 使用示例

```ruby
# Gemfile 添加
gem 'rails_notify'

# 配置
# config/initializers/rails_notify.rb
RailsNotify.configure do |config|
  config.default_channel = :email
  config.channels = [:sms, :wechat, :站内信]
end
```
