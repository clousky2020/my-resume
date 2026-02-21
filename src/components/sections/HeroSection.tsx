'use client'

import { profile } from '@/lib/data'

export default function HeroSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 头像 */}
          <div className="mb-6">
            <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-xl">
              {profile.name.charAt(0)}
            </div>
          </div>

          {/* 姓名 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
            {profile.name}
          </h1>

          {/* 职位和基本信息 */}
          <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-2">
            {profile.title}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {profile.location} · {profile.email}
          </p>

          {/* 个人简介 */}
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            5年全栈开发经验（Ruby on Rails + Vue.js），能独立负责多个中大型项目的全生命周期，包括技术选型、核心开发、部署运维、迭代优化及客户对接，具备出色的端到端交付能力。
          </p>
        </div>
      </div>
    </section>
  )
}
