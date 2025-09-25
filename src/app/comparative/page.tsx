"use client"

import { useState } from "react"
import MainLayout from "~/components/layout/main-layout"
import { comparativeRules } from "./partials/comparative-rules"
import { exercises } from "./partials/exercise-sample"

export default function ComparativePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
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

  const typeColors = {
    Positive: "bg-green-100 text-green-800 border-green-500",
    Comparative: "bg-blue-100 text-blue-800 border-blue-500",
    Superlative: "bg-purple-100 text-purple-800 border-purple-500",
  }

  return (
    <MainLayout title="Comparative Degree - Tingkat Perbandingan">
      <div className="max-w-7xl mx-auto">
        {/* Type Filter */}
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
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                    typeColors[rule.type]
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{rule.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        typeColors[rule.type]
                      }`}
                    >
                      {rule.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{rule.explanation}</p>

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
                </div>
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

        {/* Exercise Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latihan Comparative Degree</h2>
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
                            : "border-pink-500 bg-pink-50"
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
                    className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700"
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
