"use client"

import { useState } from "react"
import CollapsibleCard from "~/components/common/collapsible-card"
import { adaRules } from "./ada-rules"

const categories = ["Articles", "Determiners", "Adjectives"]

export default function AdaContent() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleActiveColor = (index: number) => {
    if (selectedCategory === "Articles") {
      return selectedCard === index ? "blue" : "neutral"
    } else if (selectedCategory === "Determiners") {
      return selectedCard === index ? "purple" : "neutral"
    } else {
      return selectedCard === index ? "emerald" : "neutral"
    }
  }

  const handleBadgeColor = () => {
    if (selectedCategory === "Articles") {
      return "blue"
    } else if (selectedCategory === "Determiners") {
      return "purple"
    } else {
      return "emerald"
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
          {categories.map((category) => (
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Aturan ADA</h2>
        <div className="space-y-6">
          {adaRules
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
                          <div className="flex items-center text-green-600 mb-1">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm font-medium">Benar:</span>
                          </div>
                          <p className="text-green-700 mb-2 italic">
                            &quot;{example.correct}&quot;
                          </p>
                          {example.incorrect && (
                            <>
                              <div className="flex items-center text-red-600 mb-1">
                                <span className="text-red-500 mr-2">✗</span>
                                <span className="text-sm font-medium">Salah:</span>
                              </div>
                              <p className="text-red-700 italic">&quot;{example.incorrect}&quot;</p>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-semibold text-blue-900 mb-1">💡 Tips:</h4>
                    <p className="text-blue-800 text-sm">{rule.tips}</p>
                  </div>
                </div>
              </CollapsibleCard>
            ))}
        </div>
      </div>

      {/* Quick Reference Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Referensi Cepat</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-4">Articles</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>a/an:</strong> benda tidak spesifik
              </div>
              <div>
                <strong>the:</strong> benda spesifik
              </div>
              <div>
                <strong>zero:</strong> generalisasi
              </div>
              <div className="mt-3 p-2 bg-blue-50 rounded text-xs">
                <strong>Tip:</strong> Dengarkan bunyi pertama, bukan huruf!
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-green-600 mb-4">Determiners</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>this/these:</strong> dekat
              </div>
              <div>
                <strong>that/those:</strong> jauh
              </div>
              <div>
                <strong>some:</strong> positif
              </div>
              <div>
                <strong>any:</strong> negatif/tanya
              </div>
              <div>
                <strong>much:</strong> uncountable
              </div>
              <div>
                <strong>many:</strong> countable
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-purple-600 mb-4">Adjectives</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Urutan:</strong> OSASCOMP
              </div>
              <div>Opinion → Size → Age</div>
              <div>Shape → Color → Origin</div>
              <div>Material → Purpose</div>
              <div className="mt-3 p-2 bg-purple-50 rounded text-xs">
                <strong>Tip:</strong> Adjective + noun, Verb + adverb
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
