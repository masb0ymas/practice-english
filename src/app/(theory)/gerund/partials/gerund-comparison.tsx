import React from "react"

export default function GerundComparison() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Gerund vs Infinitive</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-4">Verbs + Gerund Only</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>enjoy:</strong> I enjoy swimming.
              </div>
              <div>
                <strong>finish:</strong> She finished reading.
              </div>
              <div>
                <strong>avoid:</strong> Avoid eating late.
              </div>
              <div>
                <strong>suggest:</strong> I suggest going home.
              </div>
              <div>
                <strong>mind:</strong> Do you mind waiting?
              </div>
              <div>
                <strong>practice:</strong> Practice speaking English.
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-4">Verbs + Infinitive Only</h3>
            <div className="space-y-2 text-sm">
              <div>
                <strong>want:</strong> I want to learn.
              </div>
              <div>
                <strong>decide:</strong> She decided to go.
              </div>
              <div>
                <strong>plan:</strong> We plan to visit.
              </div>
              <div>
                <strong>hope:</strong> I hope to see you.
              </div>
              <div>
                <strong>need:</strong> You need to study.
              </div>
              <div>
                <strong>promise:</strong> He promised to help.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded">
          <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Perhatian:</h4>
          <p className="text-yellow-700 text-sm">
            Beberapa kata kerja bisa diikuti gerund atau infinitive dengan arti yang berbeda:
            <br />• <strong>remember:</strong> I remember locking the door (sudah dilakukan) vs I
            remembered to lock the door (akan dilakukan)
            <br />• <strong>stop:</strong> I stopped smoking (berhenti merokok) vs I stopped to
            smoke (berhenti untuk merokok)
          </p>
        </div>
      </div>
    </div>
  )
}
