import { timeGroupColors } from "./tenses-list"
import { tenses } from "./tenses-rules"

export default function TensesSummary() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ringkasan Semua Tenses</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Tense</th>
                <th className="text-left p-4 font-semibold text-gray-900">Formula</th>
                <th className="text-left p-4 font-semibold text-gray-900">Contoh</th>
                <th className="text-left p-4 font-semibold text-gray-900">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {tenses.map((tense, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{tense.tense}</td>
                  <td className="p-4 text-gray-600 font-mono text-sm">
                    <div className="mb-1">
                      <span className="text-green-600">(+)</span> {tense.formula.positive}
                    </div>
                    <div className="mb-1">
                      <span className="text-red-600">(-)</span> {tense.formula.negative}
                    </div>
                    {tense.formula.interrogative && (
                      <div>
                        <span className="text-blue-600">(?)</span> {tense.formula.interrogative}
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-gray-700 italic text-sm">
                    <div className="mb-1">&quot;{tense.examples.positive.I}&quot;</div>
                    <div className="mb-1">&quot;{tense.examples.negative.I}&quot;</div>
                    {tense.examples.interrogative && (
                      <div>&quot;{tense.examples.interrogative.I}&quot;</div>
                    )}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        timeGroupColors[tense.timeGroup]
                      }`}
                    >
                      {tense.timeGroup}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
