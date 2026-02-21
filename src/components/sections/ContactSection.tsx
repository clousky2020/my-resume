'use client'

import { profile } from '@/lib/data'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          联系方式
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {/* 邮箱 */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    邮箱
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* 地址 */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    地址
                  </p>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {profile.location}
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
