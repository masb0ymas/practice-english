"use client"

import { useState } from "react"
import { gerundRules } from "./gerund-rules"
import CollapsibleCard from "~/components/common/collapsible-card"

export const categoryColors = {
  Subject: "bg-blue-100 text-blue-800 border-blue-500",
  Object: "bg-green-100 text-green-800 border-green-500",
  Preposition: "bg-purple-100 text-purple-800 border-purple-500",
  Expression: "bg-orange-100 text-orange-800 border-orange-500",
}

export default function GerundContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const handleActiveColor = (index: number) => {
    if (selectedCategory === "Subject") {
      return selectedCard === index ? "blue" : "neutral"
    } else if (selectedCategory === "Object") {
      return selectedCard === index ? "green" : "neutral"
    } else if (selectedCategory === "Preposition") {
      return selectedCard === index ? "purple" : "neutral"
    } else {
      return selectedCard === index ? "orange" : "neutral"
    }
  }

  const handleBadgeColor = () => {
    if (selectedCategory === "Subject") {
      return "blue"
    } else if (selectedCategory === "Object") {
      return "green"
    } else if (selectedCategory === "Preposition") {
      return "purple"
    } else {
      return "orange"
    }
  }

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
              <CollapsibleCard
                key={index}
                title={rule.title}
                rule={rule.category}
                explanation={rule.explanation}
                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                activeColor={handleActiveColor(index)}
                badgeColor={handleBadgeColor()}
                isExpanded={selectedCard === index}
              >
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
              </CollapsibleCard>
            ))}
        </div>
      </div>
    </>
  )
}
