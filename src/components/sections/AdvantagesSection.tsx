'use client'

import { advantages } from '@/lib/data'

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          个人优势
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {advantage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
