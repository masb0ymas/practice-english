"use client"

import { useState } from "react"
import { Exercise } from "~/types/exercise"

interface QuestionnaireProps {
  title: string
  exercises: Exercise[]
}

export default function Questionnaire({ title, exercises }: QuestionnaireProps) {
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
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
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
  )
}
