import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "../components/Layout"
import { useState } from "react"

export const Route = createFileRoute("/modals")({
  component: ModalsPage,
})

interface ModalVerb {
  modal: string
  meaning: string
  usage: string[]
  examples: string[]
  formality: 'Formal' | 'Informal' | 'Both'
}

interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

function ModalsPage() {
  const [selectedModal, setSelectedModal] = useState<string | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const modalVerbs: ModalVerb[] = [
    {
      modal: "Can",
      meaning: "Kemampuan, Izin (informal)",
      usage: ["Menyatakan kemampuan", "Meminta izin (informal)", "Menyatakan kemungkinan"],
      examples: [
        "I can speak English fluently.",
        "Can I borrow your pen?",
        "It can be dangerous."
      ],
      formality: "Informal"
    },
    {
      modal: "Could",
      meaning: "Kemampuan masa lalu, Izin (formal), Saran",
      usage: ["Kemampuan di masa lalu", "Meminta izin (lebih sopan)", "Memberikan saran", "Kemungkinan"],
      examples: [
        "I could swim when I was 5.",
        "Could you help me, please?",
        "You could try calling him.",
        "It could rain tomorrow."
      ],
      formality: "Formal"
    },
    {
      modal: "Will",
      meaning: "Masa depan, Janji, Keputusan spontan",
      usage: ["Menyatakan masa depan", "Membuat janji", "Keputusan spontan", "Prediksi"],
      examples: [
        "I will visit you tomorrow.",
        "I will help you with this project.",
        "I'll have the chicken, please.",
        "It will be sunny tomorrow."
      ],
      formality: "Both"
    },
    {
      modal: "Would",
      meaning: "Kondisional, Permintaan sopan, Kebiasaan masa lalu",
      usage: ["Conditional sentences", "Permintaan sopan", "Kebiasaan masa lalu", "Preferensi"],
      examples: [
        "I would go if I had time.",
        "Would you like some coffee?",
        "He would always arrive early.",
        "I would prefer tea."
      ],
      formality: "Formal"
    },
    {
      modal: "Must",
      meaning: "Keharusan kuat, Kesimpulan logis",
      usage: ["Keharusan yang kuat", "Kesimpulan berdasarkan bukti", "Aturan/hukum"],
      examples: [
        "You must wear a helmet.",
        "She must be tired after the long journey.",
        "Students must submit assignments on time."
      ],
      formality: "Formal"
    },
    {
      modal: "Should",
      meaning: "Saran, Kewajiban moral",
      usage: ["Memberikan saran", "Kewajiban moral", "Kemungkinan", "Kritik halus"],
      examples: [
        "You should see a doctor.",
        "We should help the poor.",
        "The train should arrive soon.",
        "You should have told me earlier."
      ],
      formality: "Both"
    },
    {
      modal: "May",
      meaning: "Izin formal, Kemungkinan",
      usage: ["Meminta izin (formal)", "Memberikan izin", "Kemungkinan", "Harapan"],
      examples: [
        "May I come in?",
        "You may leave now.",
        "It may rain this afternoon.",
        "May you have a wonderful day!"
      ],
      formality: "Formal"
    },
    {
      modal: "Might",
      meaning: "Kemungkinan kecil, Izin (sangat formal)",
      usage: ["Kemungkinan yang kecil", "Saran halus", "Izin (sangat formal)"],
      examples: [
        "I might go to the party.",
        "You might want to reconsider.",
        "Might I suggest an alternative?"
      ],
      formality: "Formal"
    }
  ]

  const exercises: Exercise[] = [
    {
      id: 1,
      question: "I _____ swim when I was younger, but now I can't.",
      options: ["can", "could", "may", "might"],
      correct: 1,
      explanation: "'Could' digunakan untuk menyatakan kemampuan di masa lalu."
    },
    {
      id: 2,
      question: "_____ you help me with this heavy box?",
      options: ["Can", "Must", "Should", "May"],
      correct: 0,
      explanation: "'Can' digunakan untuk meminta bantuan secara informal dan langsung."
    },
    {
      id: 3,
      question: "You _____ wear a seatbelt while driving. It's the law.",
      options: ["can", "could", "must", "might"],
      correct: 2,
      explanation: "'Must' digunakan untuk menyatakan keharusan yang kuat, terutama aturan atau hukum."
    },
    {
      id: 4,
      question: "_____ I use your phone? Mine is broken.",
      options: ["Must", "Should", "May", "Will"],
      correct: 2,
      explanation: "'May' digunakan untuk meminta izin secara formal dan sopan."
    },
    {
      id: 5,
      question: "You _____ see a doctor about that cough.",
      options: ["can", "must", "should", "will"],
      correct: 2,
      explanation: "'Should' digunakan untuk memberikan saran atau rekomendasi."
    },
    {
      id: 6,
      question: "It _____ rain tomorrow according to the weather forecast.",
      options: ["must", "should", "will", "can"],
      correct: 2,
      explanation: "'Will' digunakan untuk prediksi berdasarkan informasi atau bukti."
    },
    {
      id: 7,
      question: "I _____ go to the party, but I'm not sure yet.",
      options: ["will", "must", "might", "should"],
      correct: 2,
      explanation: "'Might' digunakan untuk menyatakan kemungkinan yang tidak pasti."
    },
    {
      id: 8,
      question: "_____ you like some tea or coffee?",
      options: ["Will", "Would", "Can", "Must"],
      correct: 1,
      explanation: "'Would' digunakan untuk menawarkan sesuatu secara sopan."
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
    <Layout title="Modal & Auxiliary Verbs">
      <div className="max-w-6xl mx-auto">
        {/* Modal Verbs Reference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Referensi Modal Verbs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modalVerbs.map((modal, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 cursor-pointer transition-all ${
                  selectedModal === modal.modal
                    ? 'border-purple-500 shadow-lg'
                    : 'border-gray-300 hover:shadow-lg'
                }`}
                onClick={() => setSelectedModal(selectedModal === modal.modal ? null : modal.modal)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{modal.modal}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    modal.formality === 'Formal' ? 'bg-blue-100 text-blue-800' :
                    modal.formality === 'Informal' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
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
                          <p key={i} className="text-sm text-purple-600 italic">"{example}"</p>
                        ))}
                      </div>
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
            <h2 className="text-2xl font-bold text-gray-900">Latihan Soal Modal Verbs</h2>
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
                            : 'border-purple-500 bg-purple-50'
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
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700"
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
