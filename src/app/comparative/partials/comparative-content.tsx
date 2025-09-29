"use client"

import { useState } from "react"
import CollapsibleCard from "~/components/common/collapsible-card"
import { comparativeRules } from "./comparative-rules"

export const typeColors = {
  Positive: "bg-green-100 text-green-800 border-green-500",
  Comparative: "bg-blue-100 text-blue-800 border-blue-500",
  Superlative: "bg-purple-100 text-purple-800 border-purple-500",
}

export default function ComparativeContent() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const handleActiveColor = (index: number) => {
    if (selectedType === "Positive") {
      return selectedCard === index ? "green" : "neutral"
    } else if (selectedType === "Comparative") {
      return selectedCard === index ? "blue" : "neutral"
    } else {
      return selectedCard === index ? "purple" : "neutral"
    }
  }

  const handleBadgeColor = () => {
    if (selectedType === "Positive") {
      return "green"
    } else if (selectedType === "Comparative") {
      return "blue"
    } else {
      return "purple"
    }
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedType === null
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Semua Tingkatan
          </button>
          {["Positive", "Comparative", "Superlative"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === type
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Rules Reference */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Aturan Comparative Degree</h2>
        <div className="space-y-6">
          {comparativeRules
            .filter((rule) => !selectedType || rule.type === selectedType)
            .map((rule, index) => (
              <CollapsibleCard
                key={index}
                title={rule.title}
                rule={rule.type}
                explanation={rule.explanation}
                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                activeColor={handleActiveColor(index)}
                badgeColor={handleBadgeColor()}
                isExpanded={selectedCard === index}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Aturan:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {rule.rules.map((ruleItem, i) => (
                        <li key={i}>{ruleItem}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contoh:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left p-2 font-semibold">Positive</th>
                            <th className="text-left p-2 font-semibold">Comparative</th>
                            <th className="text-left p-2 font-semibold">Superlative</th>
                            <th className="text-left p-2 font-semibold">Contoh Kalimat</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rule.examples.map((example, i) => (
                            <tr key={i} className="border-t">
                              <td className="p-2 font-medium text-green-600">
                                {example.adjective}
                              </td>
                              <td className="p-2 font-medium text-blue-600">
                                {example.comparative}
                              </td>
                              <td className="p-2 font-medium text-purple-600">
                                {example.superlative}
                              </td>
                              <td className="p-2 italic">&quot;{example.sentence}&quot;</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CollapsibleCard>
            ))}
        </div>
      </div>

      {/* Common Adjectives Reference */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Daftar Adjective Umum</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Regular (Short)</h4>
              <div className="space-y-1 text-sm">
                <div>tall → taller → tallest</div>
                <div>fast → faster → fastest</div>
                <div>smart → smarter → smartest</div>
                <div>big → bigger → biggest</div>
                <div>happy → happier → happiest</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Regular (Long)</h4>
              <div className="space-y-1 text-sm">
                <div>beautiful → more beautiful → most beautiful</div>
                <div>expensive → more expensive → most expensive</div>
                <div>interesting → more interesting → most interesting</div>
                <div>comfortable → more comfortable → most comfortable</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Irregular</h4>
              <div className="space-y-1 text-sm">
                <div>good → better → best</div>
                <div>bad → worse → worst</div>
                <div>far → farther/further → farthest/furthest</div>
                <div>little → less → least</div>
                <div>many/much → more → most</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
