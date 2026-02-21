'use client'

import { experiences } from '@/lib/data'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          工作经历
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-blue-600"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {exp.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  主要成就：
                </h4>
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
