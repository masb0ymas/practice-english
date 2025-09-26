"use client"

import { useState } from "react"
import { modalVerbs } from "./modal-verb"

export default function ModalContent() {
  const [selectedModal, setSelectedModal] = useState<string | null>(null)

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Referensi Modal Verbs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modalVerbs.map((modal, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 cursor-pointer transition-all ${
              selectedModal === modal.modal
                ? "border-purple-500 shadow-lg"
                : "border-gray-300 hover:shadow-lg"
            }`}
            onClick={() => setSelectedModal(selectedModal === modal.modal ? null : modal.modal)}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-900">{modal.modal}</h3>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  modal.formality === "Formal"
                    ? "bg-blue-100 text-blue-800"
                    : modal.formality === "Informal"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {modal.formality}
              </span>
            </div>

            <p className="text-gray-600 mb-3 font-medium">{modal.meaning}</p>

            {selectedModal === modal.modal && (
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
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
