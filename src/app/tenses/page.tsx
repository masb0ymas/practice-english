"use client"

import { useState } from "react"
import { exercises } from "./partials/exercise-sample"
import { tenses } from "./partials/tenses-example"
import MainLayout from "~/components/layout/main-layout"

export default function TensesPage() {
  const [selectedTimeGroup, setSelectedTimeGroup] = useState<string | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    if (selectedAnswer === exercises[currentExercise].correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const resetQuiz = () => {
    setCurrentExercise(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const timeGroups = ["Present", "Past", "Future"]
  const timeGroupColors = {
    Present: "bg-green-100 text-green-800 border-green-500",
    Past: "bg-blue-100 text-blue-800 border-blue-500",
    Future: "bg-purple-100 text-purple-800 border-purple-500",
  }

  return (
    <MainLayout title="Tenses - Bentuk Waktu dalam Bahasa Inggris">
      <div className="max-w-7xl mx-auto">
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
                    <div
                      key={index}
                      className={`bg-white rounded-lg shadow-md p-6 border-l-4 transition-all hover:shadow-lg ${
                        timeGroupColors[tense.timeGroup]
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">{tense.tense}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            timeGroupColors[tense.timeGroup]
                          }`}
                        >
                          {tense.timeGroup}
                        </span>
                      </div>

                      <div className="text-sm text-gray-600 space-y-6">
                        <div className="border-b border-gray-200" />

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
                              <span className="font-mono text-sm">
                                {tense.formula.interrogative}
                              </span>
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

                      <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded mt-8">
                        <strong>Penggunaan:</strong> {tense.usage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tenses Summary Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ringkasan Semua Tenses</h2>
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

        {/* Exercise Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latihan Soal</h2>
            <div className="text-sm text-gray-600">
              Soal {currentExercise + 1} dari {exercises.length} | Skor: {score}/{exercises.length}
            </div>
          </div>

          {currentExercise < exercises.length ? (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {exercises[currentExercise].question}
                </h3>

                <div className="space-y-3">
                  {exercises[currentExercise].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                        selectedAnswer === index
                          ? showResult
                            ? index === exercises[currentExercise].correct
                              ? "border-green-500 bg-green-50 text-green-800"
                              : "border-red-500 bg-red-50 text-red-800"
                            : "border-indigo-500 bg-indigo-50"
                          : showResult && index === exercises[currentExercise].correct
                          ? "border-green-500 bg-green-50 text-green-800"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {showResult && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Penjelasan:</h4>
                  <p className="text-blue-800">{exercises[currentExercise].explanation}</p>
                </div>
              )}

              <div className="flex justify-between">
                {!showResult ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Submit Jawaban
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                  >
                    {currentExercise < exercises.length - 1 ? "Soal Berikutnya" : "Lihat Hasil"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Latihan Selesai!</h3>
              <div className="text-6xl mb-4">
                {score === exercises.length ? "🎉" : score >= exercises.length * 0.7 ? "👏" : "💪"}
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Skor Anda: {score} dari {exercises.length} (
                {Math.round((score / exercises.length) * 100)}%)
              </p>
              <button
                onClick={resetQuiz}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
              >
                Ulangi Latihan
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
