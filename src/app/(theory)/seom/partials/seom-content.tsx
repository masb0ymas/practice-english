"use client"

import { useState } from "react"
import { seomRules } from "./seom-rules"
import CollapsibleCard from "~/components/common/collapsible-card"

export default function SeomContent() {
  const [selectedRule, setSelectedRule] = useState<string | null>(null)

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Aturan Subject-Verb Agreement</h2>
      <div className="space-y-6">
        {seomRules.map((rule, index) => (
          <CollapsibleCard
            key={index}
            title={rule.rule}
            rule={`Aturan ${index + 1}`}
            explanation={rule.explanation}
            onClick={() => setSelectedRule(selectedRule === rule.rule ? null : rule.rule)}
            activeColor={selectedRule === rule.rule ? "emerald" : "neutral"}
            badgeColor="emerald"
            isExpanded={selectedRule === rule.rule}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Contoh:</h4>
                <div className="space-y-2">
                  {rule.examples.map((example, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded">
                      <div className="flex items-center text-green-600 mb-1">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm font-medium">Benar:</span>
                      </div>
                      <p className="text-green-700 mb-2 italic">&quot;{example.correct}&quot;</p>
                      <div className="flex items-center text-red-600 mb-1">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm font-medium">Salah:</span>
                      </div>
                      <p className="text-red-700 italic">&quot;{example.incorrect}&quot;</p>
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
  )
}
