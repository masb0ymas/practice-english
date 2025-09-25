"use client"

import { useState } from "react"
import MainLayout from "~/components/layout/main-layout"
import { exercises } from "./partials/exercise-sample"
import { seomRules } from "./partials/seom-rules"

export default function SeomPage() {
  const [selectedRule, setSelectedRule] = useState<string | null>(null)
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

  return (
    <MainLayout title="SEOM - Subject-Verb Agreement">
      <div className="max-w-7xl mx-auto">
        {/* Rules Reference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aturan Subject-Verb Agreement</h2>
          <div className="space-y-6">
            {seomRules.map((rule, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 cursor-pointer transition-all ${
                  selectedRule === rule.rule
                    ? "border-emerald-500 shadow-lg"
                    : "border-gray-300 hover:shadow-lg"
                }`}
                onClick={() => setSelectedRule(selectedRule === rule.rule ? null : rule.rule)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{rule.rule}</h3>
                  <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Aturan {index + 1}
                  </div>
                </div>

                <p className="text-gray-600 mb-3">{rule.explanation}</p>

                {selectedRule === rule.rule && (
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
                            <p className="text-green-700 mb-2 italic">
                              &quot;{example.correct}&quot;
                            </p>
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
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latihan Subject-Verb Agreement</h2>
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
                            : "border-emerald-500 bg-emerald-50"
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
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700"
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
