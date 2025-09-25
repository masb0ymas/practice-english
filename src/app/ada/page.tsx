"use client"

import { useState } from "react"
import MainLayout from "~/components/layout/main-layout"
import { adaRules } from "./partials/ada-rules"
import { exercises } from "./partials/exercise-sample"

export default function AdaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
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

  const categories = ["Articles", "Determiners", "Adjectives"]
  const categoryColors = {
    Articles: "bg-blue-100 text-blue-800 border-blue-500",
    Determiners: "bg-green-100 text-green-800 border-green-500",
    Adjectives: "bg-purple-100 text-purple-800 border-purple-500",
  }

  return (
    <MainLayout title="ADA - Articles, Determiners & Adjectives">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Semua Kategori
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Rules Reference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aturan ADA</h2>
          <div className="space-y-6">
            {adaRules
              .filter((rule) => !selectedCategory || rule.category === selectedCategory)
              .map((rule, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                    categoryColors[rule.category]
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{rule.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        categoryColors[rule.category]
                      }`}
                    >
                      {rule.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{rule.explanation}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contoh:</h4>
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
                            {example.incorrect && (
                              <>
                                <div className="flex items-center text-red-600 mb-1">
                                  <span className="text-red-500 mr-2">✗</span>
                                  <span className="text-sm font-medium">Salah:</span>
                                </div>
                                <p className="text-red-700 italic">
                                  &quot;{example.incorrect}&quot;
                                </p>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-semibold text-blue-900 mb-1">💡 Tips:</h4>
                      <p className="text-blue-800 text-sm">{rule.tips}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Referensi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Articles</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>a/an:</strong> benda tidak spesifik
                </div>
                <div>
                  <strong>the:</strong> benda spesifik
                </div>
                <div>
                  <strong>zero:</strong> generalisasi
                </div>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs">
                  <strong>Tip:</strong> Dengarkan bunyi pertama, bukan huruf!
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-green-600 mb-4">Determiners</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>this/these:</strong> dekat
                </div>
                <div>
                  <strong>that/those:</strong> jauh
                </div>
                <div>
                  <strong>some:</strong> positif
                </div>
                <div>
                  <strong>any:</strong> negatif/tanya
                </div>
                <div>
                  <strong>much:</strong> uncountable
                </div>
                <div>
                  <strong>many:</strong> countable
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-4">Adjectives</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Urutan:</strong> OSASCOMP
                </div>
                <div>Opinion → Size → Age</div>
                <div>Shape → Color → Origin</div>
                <div>Material → Purpose</div>
                <div className="mt-3 p-2 bg-purple-50 rounded text-xs">
                  <strong>Tip:</strong> Adjective + noun, Verb + adverb
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latihan ADA</h2>
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
                            : "border-orange-500 bg-orange-50"
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
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
              <div className="mb-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Ringkasan Hasil:</h4>
                  <div className="text-sm text-gray-600">
                    {score === exercises.length &&
                      "Sempurna! Anda menguasai ADA dengan sangat baik! 🌟"}
                    {score >= exercises.length * 0.8 &&
                      score < exercises.length &&
                      "Bagus sekali! Anda hampir menguasai semua materi ADA! 👍"}
                    {score >= exercises.length * 0.6 &&
                      score < exercises.length * 0.8 &&
                      "Cukup baik! Terus berlatih untuk meningkatkan pemahaman ADA Anda! 📚"}
                    {score < exercises.length * 0.6 &&
                      "Perlu lebih banyak latihan. Baca kembali materi dan coba lagi! 💪"}
                  </div>
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700"
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
