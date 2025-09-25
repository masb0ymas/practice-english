import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "../components/Layout"
import { useState } from "react"

export const Route = createFileRoute("/seom")({
  component: SeomPage,
})

interface SeomRule {
  rule: string
  explanation: string
  examples: { correct: string; incorrect: string }[]
  tips: string
}

interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

function SeomPage() {
  const [selectedRule, setSelectedRule] = useState<string | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const seomRules: SeomRule[] = [
    {
      rule: "Singular Subject + Singular Verb",
      explanation: "Subjek tunggal harus diikuti dengan kata kerja tunggal (menambahkan -s/-es untuk orang ketiga tunggal).",
      examples: [
        { correct: "She walks to school every day.", incorrect: "She walk to school every day." },
        { correct: "The cat sleeps on the sofa.", incorrect: "The cat sleep on the sofa." },
        { correct: "He studies English hard.", incorrect: "He study English hard." }
      ],
      tips: "Ingat: He, She, It + Verb + s/es"
    },
    {
      rule: "Plural Subject + Plural Verb",
      explanation: "Subjek jamak harus diikuti dengan kata kerja jamak (tanpa menambahkan -s/-es).",
      examples: [
        { correct: "They walk to school every day.", incorrect: "They walks to school every day." },
        { correct: "The cats sleep on the sofa.", incorrect: "The cats sleeps on the sofa." },
        { correct: "We study English together.", incorrect: "We studies English together." }
      ],
      tips: "Ingat: They, We, You + Verb (tanpa s/es)"
    },
    {
      rule: "Collective Nouns",
      explanation: "Kata benda kolektif bisa singular atau plural tergantung konteks. Jika bertindak sebagai satu unit, gunakan singular.",
      examples: [
        { correct: "The team is playing well.", incorrect: "The team are playing well." },
        { correct: "The family lives in Jakarta.", incorrect: "The family live in Jakarta." },
        { correct: "The class starts at 8 AM.", incorrect: "The class start at 8 AM." }
      ],
      tips: "Team, family, class, group biasanya dianggap singular"
    },
    {
      rule: "Indefinite Pronouns",
      explanation: "Kata ganti tak tentu seperti everyone, somebody, nothing selalu singular.",
      examples: [
        { correct: "Everyone is ready.", incorrect: "Everyone are ready." },
        { correct: "Somebody has left their bag.", incorrect: "Somebody have left their bag." },
        { correct: "Nothing seems right.", incorrect: "Nothing seem right." }
      ],
      tips: "Everyone, someone, anybody, nothing, each = singular"
    },
    {
      rule: "Either...or / Neither...nor",
      explanation: "Kata kerja mengikuti subjek yang terdekat dengan kata kerja.",
      examples: [
        { correct: "Either John or his friends are coming.", incorrect: "Either John or his friends is coming." },
        { correct: "Neither the students nor the teacher is here.", incorrect: "Neither the students nor the teacher are here." },
        { correct: "Either the books or the pen is on the table.", incorrect: "Either the books or the pen are on the table." }
      ],
      tips: "Lihat subjek yang paling dekat dengan kata kerja"
    },
    {
      rule: "There is/are",
      explanation: "Gunakan 'there is' untuk singular dan 'there are' untuk plural.",
      examples: [
        { correct: "There is a book on the table.", incorrect: "There are a book on the table." },
        { correct: "There are many students in the class.", incorrect: "There is many students in the class." },
        { correct: "There is some water in the glass.", incorrect: "There are some water in the glass." }
      ],
      tips: "Lihat kata benda setelah 'there is/are'"
    },
    {
      rule: "Subjects with Prepositions",
      explanation: "Kata kerja harus sesuai dengan subjek utama, bukan objek dari preposisi.",
      examples: [
        { correct: "The box of chocolates is expensive.", incorrect: "The box of chocolates are expensive." },
        { correct: "One of the students is absent.", incorrect: "One of the students are absent." },
        { correct: "The group of tourists was lost.", incorrect: "The group of tourists were lost." }
      ],
      tips: "Abaikan frasa preposisi, fokus pada subjek utama"
    },
    {
      rule: "Gerunds and Infinitives as Subjects",
      explanation: "Gerund (-ing) dan infinitive (to + verb) sebagai subjek selalu dianggap singular.",
      examples: [
        { correct: "Swimming is good exercise.", incorrect: "Swimming are good exercise." },
        { correct: "To learn English takes time.", incorrect: "To learn English take time." },
        { correct: "Reading books helps improve vocabulary.", incorrect: "Reading books help improve vocabulary." }
      ],
      tips: "Gerund dan infinitive = singular"
    }
  ]

  const exercises: Exercise[] = [
    {
      id: 1,
      question: "The group of students _____ studying for the exam.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      explanation: "Subjek utama adalah 'group' (singular), bukan 'students'. Jadi gunakan 'is'."
    },
    {
      id: 2,
      question: "Either my brother or my sisters _____ going to help.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      explanation: "Dengan 'either...or', kata kerja mengikuti subjek terdekat. 'Sisters' (plural) terdekat dengan kata kerja, jadi gunakan 'are'."
    },
    {
      id: 3,
      question: "Everyone in the class _____ their homework.",
      options: ["has finished", "have finished", "finish", "finishes"],
      correct: 0,
      explanation: "'Everyone' adalah indefinite pronoun yang selalu singular, jadi gunakan 'has finished'."
    },
    {
      id: 4,
      question: "There _____ many books on the shelf.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      explanation: "'Books' adalah plural, jadi gunakan 'there are'."
    },
    {
      id: 5,
      question: "Swimming in the ocean _____ dangerous.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      explanation: "Gerund 'swimming' sebagai subjek selalu dianggap singular, jadi gunakan 'is'."
    },
    {
      id: 6,
      question: "The team _____ celebrating their victory.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      explanation: "'Team' adalah collective noun yang dianggap singular ketika bertindak sebagai satu unit."
    },
    {
      id: 7,
      question: "Neither the teacher nor the students _____ ready.",
      options: ["is", "are", "was", "were"],
      correct: 1,
      explanation: "Dengan 'neither...nor', kata kerja mengikuti subjek terdekat. 'Students' (plural) terdekat, jadi gunakan 'are'."
    },
    {
      id: 8,
      question: "One of my friends _____ a doctor.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      explanation: "Subjek utama adalah 'one' (singular), bukan 'friends'. Jadi gunakan 'is'."
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

  return (
    <Layout title="SEOM - Subject-Verb Agreement">
      <div className="max-w-6xl mx-auto">
        {/* Rules Reference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aturan Subject-Verb Agreement</h2>
          <div className="space-y-6">
            {seomRules.map((rule, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 cursor-pointer transition-all ${
                  selectedRule === rule.rule
                    ? 'border-emerald-500 shadow-lg'
                    : 'border-gray-300 hover:shadow-lg'
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
                            <p className="text-green-700 mb-2 italic">"{example.correct}"</p>
                            <div className="flex items-center text-red-600 mb-1">
                              <span className="text-red-500 mr-2">✗</span>
                              <span className="text-sm font-medium">Salah:</span>
                            </div>
                            <p className="text-red-700 italic">"{example.incorrect}"</p>
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
                              ? 'border-green-500 bg-green-50 text-green-800'
                              : 'border-red-500 bg-red-50 text-red-800'
                            : 'border-emerald-500 bg-emerald-50'
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
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700"
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
