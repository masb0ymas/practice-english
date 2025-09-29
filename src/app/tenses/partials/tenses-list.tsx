"use client"

import { useState } from "react"
import CollapsibleCard from "~/components/common/collapsible-card"
import { tenses } from "./tenses-rules"

export const timeGroupColors = {
  Present: "bg-green-100 text-green-800 border-green-500",
  Past: "bg-blue-100 text-blue-800 border-blue-500",
  Future: "bg-purple-100 text-purple-800 border-purple-500",
}

export default function TensesList() {
  const [selectedTimeGroup, setSelectedTimeGroup] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const timeGroups = ["Present", "Past", "Future"]

  const handleActiveColor = () => {
    if (["present-1", "present-2"].includes(String(selectedCard))) {
      return "green"
    } else if (["past-1", "past-2"].includes(String(selectedCard))) {
      return "blue"
    } else if (["future-1", "future-2"].includes(String(selectedCard))) {
      return "purple"
    } else if (["past-future-1", "past-future-2"].includes(String(selectedCard))) {
      return "blue"
    } else {
      return "neutral"
    }
  }

  return (
    <>
      {/* Time Group Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedTimeGroup(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedTimeGroup === null
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Semua Tenses
          </button>
          {timeGroups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedTimeGroup(group)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTimeGroup === group
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {group} Tenses
            </button>
          ))}
        </div>
      </div>

      {/* Tense Reference Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {selectedTimeGroup ? `${selectedTimeGroup} Tenses` : "Referensi Semua Tenses"}
        </h2>

        {/* Grouped Tenses Display */}
        {timeGroups.map((timeGroup) => {
          const filteredTenses = tenses.filter(
            (tense) =>
              tense.timeGroup === timeGroup &&
              (!selectedTimeGroup || selectedTimeGroup === timeGroup)
          )

          if (filteredTenses.length === 0) return null

          return (
            <div key={timeGroup} className="mb-8">
              <h3
                className={`text-xl font-bold mb-4 pb-2 border-b-2 ${
                  timeGroup === "Present"
                    ? "text-green-600 border-green-200"
                    : timeGroup === "Past"
                    ? "text-blue-600 border-blue-200"
                    : "text-purple-600 border-purple-200"
                }`}
              >
                {timeGroup} Tenses ({filteredTenses.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTenses.map((tense, index) => (
                  <CollapsibleCard
                    key={index}
                    title={tense.tense}
                    rule={tense.timeGroup}
                    explanation={tense.usage}
                    onClick={() =>
                      setSelectedCard(selectedCard === tense.category ? null : tense.category)
                    }
                    activeColor={handleActiveColor()}
                    badgeColor={handleActiveColor()}
                    isExpanded={selectedCard === tense.category}
                  >
                    <div className="text-sm text-gray-600 space-y-6">
                      {/* Positive */}
                      <div className="space-y-2">
                        <div className="flex flex-row items-center gap-2">
                          <strong className="text-sm">Formula (+):</strong>{" "}
                          <span className="font-mono text-sm">{tense.formula.positive}</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm text-green-600 mb-2">Positive:</h5>
                          <div className="space-y-1 text-sm leading-relaxed italic rounded-lg bg-green-50 p-3">
                            <div>
                              <strong>I:</strong> {tense.examples.positive.I}
                            </div>
                            <div>
                              <strong>You:</strong> {tense.examples.positive.you}
                            </div>
                            <div>
                              <strong>We:</strong> {tense.examples.positive.we}
                            </div>
                            <div>
                              <strong>They:</strong> {tense.examples.positive.they}
                            </div>
                            <div>
                              <strong>She:</strong> {tense.examples.positive.she}
                            </div>
                            <div>
                              <strong>He:</strong> {tense.examples.positive.he}
                            </div>
                            <div>
                              <strong>It:</strong> {tense.examples.positive.it}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Negative */}
                      <div className="space-y-2">
                        <div className="flex flex-row items-center gap-2">
                          <strong className="text-sm">Formula (-):</strong>{" "}
                          <span className="font-mono text-sm">{tense.formula.negative}</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm text-red-600 mb-2">Negative:</h5>
                          <div className="space-y-1 text-sm leading-relaxed italic rounded-lg bg-red-50 p-3">
                            <div>
                              <strong>I:</strong> {tense.examples.negative.I}
                            </div>
                            <div>
                              <strong>You:</strong> {tense.examples.negative.you}
                            </div>
                            <div>
                              <strong>We:</strong> {tense.examples.negative.we}
                            </div>
                            <div>
                              <strong>They:</strong> {tense.examples.negative.they}
                            </div>
                            <div>
                              <strong>She:</strong> {tense.examples.negative.she}
                            </div>
                            <div>
                              <strong>He:</strong> {tense.examples.negative.he}
                            </div>
                            <div>
                              <strong>It:</strong> {tense.examples.negative.it}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Interrogative */}
                      {tense.formula.interrogative && (
                        <div className="space-y-2">
                          <div className="flex flex-row items-center gap-2">
                            <strong className="text-sm">Formula (?):</strong>{" "}
                            <span className="font-mono text-sm">{tense.formula.interrogative}</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm text-blue-600 mb-2">
                              Interrogative:
                            </h5>
                            <div className="space-y-1 text-sm leading-relaxed italic rounded-lg bg-blue-50 p-3">
                              <div>
                                <strong>I:</strong> {tense.examples.interrogative?.I}
                              </div>
                              <div>
                                <strong>You:</strong> {tense.examples.interrogative?.you}
                              </div>
                              <div>
                                <strong>We:</strong> {tense.examples.interrogative?.we}
                              </div>
                              <div>
                                <strong>They:</strong> {tense.examples.interrogative?.they}
                              </div>
                              <div>
                                <strong>She:</strong> {tense.examples.interrogative?.she}
                              </div>
                              <div>
                                <strong>He:</strong> {tense.examples.interrogative?.he}
                              </div>
                              <div>
                                <strong>It:</strong> {tense.examples.interrogative?.it}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CollapsibleCard>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
