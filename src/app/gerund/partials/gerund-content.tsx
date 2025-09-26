"use client"

import { useState } from "react"
import { gerundRules } from "./gerund-rules"

export const categoryColors = {
  Subject: "bg-blue-100 text-blue-800 border-blue-500",
  Object: "bg-green-100 text-green-800 border-green-500",
  Preposition: "bg-purple-100 text-purple-800 border-purple-500",
  Expression: "bg-orange-100 text-orange-800 border-orange-500",
}

export default function GerundContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Semua Kategori
          </button>
          {["Subject", "Object", "Preposition", "Expression"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Rules Reference */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Aturan Penggunaan Gerund</h2>
        <div className="space-y-6">
          {gerundRules
            .filter((rule) => !selectedCategory || rule.category === selectedCategory)
            .map((rule, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                  categoryColors[rule.category]
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{rule.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryColors[rule.category]
                    }`}
                  >
                    {rule.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{rule.explanation}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contoh:</h4>
                    <div className="space-y-2">
                      {rule.examples.map((example, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded">
                          <p className="text-gray-700 italic">&quot;{example}&quot;</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {rule.commonVerbs && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {rule.category === "Object"
                          ? "Kata Kerja yang Diikuti Gerund:"
                          : "Ekspresi Umum:"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {rule.commonVerbs.map((verb, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {verb}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-semibold text-blue-900 mb-1">💡 Tips:</h4>
                    <p className="text-blue-800 text-sm">{rule.tips}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
