import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "../components/Layout"
import { useState } from "react"

export const Route = createFileRoute("/comparative")({
  component: ComparativePage,
})

interface ComparativeRule {
  type: 'Positive' | 'Comparative' | 'Superlative'
  title: string
  explanation: string
  rules: string[]
  examples: { adjective: string; comparative: string; superlative: string; sentence: string }[]
}

interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

function ComparativePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const comparativeRules: ComparativeRule[] = [
    {
      type: 'Positive',
      title: 'Positive Degree',
      explanation: 'Bentuk dasar adjective tanpa perbandingan. Digunakan untuk menyatakan kualitas tanpa membandingkan.',
      rules: [
        'Menggunakan as...as untuk perbandingan yang sama',
        'Menggunakan not as...as untuk menyatakan tidak sama'
      ],
      examples: [
        { adjective: 'tall', comparative: 'taller', superlative: 'tallest', sentence: 'She is as tall as her brother.' },
        { adjective: 'beautiful', comparative: 'more beautiful', superlative: 'most beautiful', sentence: 'The garden is not as beautiful as before.' }
      ]
    },
    {
      type: 'Comparative',
      title: 'Comparative Degree',
      explanation: 'Digunakan untuk membandingkan dua benda, orang, atau situasi.',
      rules: [
        'Adjective pendek (1-2 suku kata): + er (tall → taller)',
        'Adjective panjang (3+ suku kata): more + adjective (beautiful → more beautiful)',
        'Irregular adjectives: good → better, bad → worse, far → farther/further'
      ],
      examples: [
        { adjective: 'tall', comparative: 'taller', superlative: 'tallest', sentence: 'John is taller than Mike.' },
        { adjective: 'expensive', comparative: 'more expensive', superlative: 'most expensive', sentence: 'This car is more expensive than that one.' },
        { adjective: 'good', comparative: 'better', superlative: 'best', sentence: 'This book is better than the previous one.' }
      ]
    },
    {
      type: 'Superlative',
      title: 'Superlative Degree',
      explanation: 'Digunakan untuk membandingkan tiga atau lebih benda dan menunjukkan yang paling ekstrem.',
      rules: [
        'Adjective pendek: the + adjective + est (tall → the tallest)',
        'Adjective panjang: the most + adjective (beautiful → the most beautiful)',
        'Irregular adjectives: good → the best, bad → the worst'
      ],
      examples: [
        { adjective: 'tall', comparative: 'taller', superlative: 'tallest', sentence: 'John is the tallest student in the class.' },
        { adjective: 'expensive', comparative: 'more expensive', superlative: 'most expensive', sentence: 'This is the most expensive car in the showroom.' },
        { adjective: 'good', comparative: 'better', superlative: 'best', sentence: 'This is the best movie I have ever seen.' }
      ]
    }
  ]

  const exercises: Exercise[] = [
    {
      id: 1,
      question: "My house is _____ than yours.",
      options: ["big", "bigger", "biggest", "the biggest"],
      correct: 1,
      explanation: "Comparative degree untuk membandingkan dua rumah menggunakan 'bigger'."
    },
    {
      id: 2,
      question: "This is _____ book I have ever read.",
      options: ["interesting", "more interesting", "most interesting", "the most interesting"],
      correct: 3,
      explanation: "Superlative degree dengan adjective panjang menggunakan 'the most interesting'."
    },
    {
      id: 3,
      question: "She runs _____ her sister.",
      options: ["as fast as", "faster than", "fastest than", "the fastest"],
      correct: 0,
      explanation: "Positive degree dengan perbandingan yang sama menggunakan 'as fast as'."
    },
    {
      id: 4,
      question: "Today's weather is _____ than yesterday's.",
      options: ["bad", "worse", "worst", "the worst"],
      correct: 1,
      explanation: "Comparative degree dari irregular adjective 'bad' adalah 'worse'."
    },
    {
      id: 5,
      question: "Mount Everest is _____ mountain in the world.",
      options: ["high", "higher", "highest", "the highest"],
      correct: 3,
      explanation: "Superlative degree untuk menunjukkan gunung tertinggi di dunia menggunakan 'the highest'."
    },
    {
      id: 6,
      question: "This problem is _____ difficult _____ I thought.",
      options: ["more, than", "as, as", "most, than", "the most, as"],
      correct: 0,
      explanation: "Comparative degree dengan adjective panjang menggunakan 'more difficult than'."
    },
    {
      id: 7,
      question: "Among all students, Lisa is _____ one.",
      options: ["smart", "smarter", "smartest", "the smartest"],
      correct: 3,
      explanation: "Superlative degree untuk membandingkan di antara semua siswa menggunakan 'the smartest'."
    },
    {
      id: 8,
      question: "Your answer is not _____ correct _____ mine.",
      options: ["as, as", "more, than", "most, than", "the most, as"],
      correct: 0,
      explanation: "Negative positive degree menggunakan 'not as correct as'."
    }
  ]

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
    Positive: 'bg-green-100 text-green-800 border-green-500',
    Comparative: 'bg-blue-100 text-blue-800 border-blue-500',
    Superlative: 'bg-purple-100 text-purple-800 border-purple-500'
  }

  return (
    <Layout title="Comparative Degree - Tingkat Perbandingan">
      <div className="max-w-6xl mx-auto">
        {/* Type Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === null
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Semua Tingkatan
            </button>
            {['Positive', 'Comparative', 'Superlative'].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
              .filter(rule => !selectedType || rule.type === selectedType)
              .map((rule, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${typeColors[rule.type]}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{rule.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[rule.type]}`}>
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
                                <td className="p-2 font-medium text-green-600">{example.adjective}</td>
                                <td className="p-2 font-medium text-blue-600">{example.comparative}</td>
                                <td className="p-2 font-medium text-purple-600">{example.superlative}</td>
                                <td className="p-2 italic">"{example.sentence}"</td>
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
                              ? 'border-green-500 bg-green-50 text-green-800'
                              : 'border-red-500 bg-red-50 text-red-800'
                            : 'border-pink-500 bg-pink-50'
                          : showResult && index === exercises[currentExercise].correct
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-gray-300 hover:border-gray-400'
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
                    {currentExercise < exercises.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Latihan Selesai!</h3>
              <div className="text-6xl mb-4">
                {score === exercises.length ? '🎉' : score >= exercises.length * 0.7 ? '👏' : '💪'}
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Skor Anda: {score} dari {exercises.length} ({Math.round((score / exercises.length) * 100)}%)
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
    </Layout>
  )
}
