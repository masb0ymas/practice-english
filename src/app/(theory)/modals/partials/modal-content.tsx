"use client"

import { useState } from "react"
import CollapsibleCard from "~/components/common/collapsible-card"
import { modalVerbs } from "./modal-verb"

export default function ModalContent() {
  const [selectedModal, setSelectedModal] = useState<string | null>(null)

  const handleActiveColor = () => {
    if (selectedModal === "can") {
      return "blue"
    } else if (selectedModal === "will") {
      return "emerald"
    } else if (selectedModal === "must") {
      return "rose"
    } else if (selectedModal === "may") {
      return "orange"
    } else if (selectedModal === "should") {
      return "indigo"
    } else {
      return "neutral"
    }
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Referensi Modal Verbs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modalVerbs.map((modal, index) => (
          <CollapsibleCard
            key={index}
            title={modal.modal}
            rule={modal.modal}
            explanation={modal.meaning}
            onClick={() => setSelectedModal(selectedModal === modal.similar ? null : modal.similar)}
            activeColor={handleActiveColor()}
            badgeColor={handleActiveColor()}
            isExpanded={selectedModal === modal.similar}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Penggunaan:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {modal.usage.map((use, i) => (
                    <li key={i}>{use}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contoh:</h4>
                <div className="space-y-1">
                  {modal.examples.map((example, i) => (
                    <p key={i} className="text-sm text-purple-600 italic">
                      &quot;{example}&quot;
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleCard>
        ))}
      </div>
    </div>
  )
}
