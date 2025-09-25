import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "../components/Layout"
import { useState } from "react"

export const Route = createFileRoute("/gerund")({
  component: GerundPage,
})

interface GerundRule {
  category: 'Subject' | 'Object' | 'Preposition' | 'Expression'
  title: string
  explanation: string
  examples: string[]
  commonVerbs?: string[]
  tips: string
}

interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

function GerundPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const gerundRules: GerundRule[] = [
    {
      category: 'Subject',
      title: 'Gerund sebagai Subject',
      explanation: 'Gerund dapat berfungsi sebagai subjek kalimat. Gerund sebagai subjek selalu dianggap singular.',
      examples: [
        'Swimming is my favorite sport.',
        'Reading books helps improve vocabulary.',
        'Learning English takes time and practice.',
        'Smoking is harmful to your health.'
      ],
      tips: 'Gerund sebagai subjek + verb singular (is, was, has, does)'
    },
    {
      category: 'Object',
      title: 'Gerund sebagai Object',
      explanation: 'Gerund dapat menjadi objek langsung dari kata kerja tertentu. Beberapa kata kerja hanya diikuti gerund.',
      examples: [
        'I enjoy reading novels.',
        'She finished doing her homework.',
        'They avoid eating junk food.',
        'He suggested going to the beach.'
      ],
      commonVerbs: ['enjoy', 'finish', 'avoid', 'suggest', 'mind', 'practice', 'quit', 'deny', 'admit', 'consider'],
      tips: 'Beberapa verb hanya diikuti gerund, tidak infinitive'
    },
    {
      category: 'Preposition',
      title: 'Gerund setelah Preposition',
      explanation: 'Setelah preposisi (in, on, at, by, for, without, dll), selalu gunakan gerund, bukan infinitive.',
      examples: [
        'I am interested in learning new languages.',
        'Thank you for helping me.',
        'She left without saying goodbye.',
        'He improved his English by practicing every day.'
      ],
      tips: 'Preposition + gerund (NEVER preposition + infinitive)'
    },
    {
      category: 'Expression',
      title: 'Gerund dalam Ekspresi Khusus',
      explanation: 'Beberapa ekspresi idiomatik selalu menggunakan gerund.',
      examples: [
        "It's no use crying over spilled milk.",
        "There's no point in arguing about it.",
        'I have trouble understanding his accent.',
        'She spent time preparing for the exam.'
      ],
      commonVerbs: ['spend time', 'have trouble/difficulty', 'it\'s no use', 'there\'s no point', 'can\'t help', 'look forward to'],
      tips: 'Hafalkan ekspresi khusus yang selalu diikuti gerund'
    }
  ]

  const exercises: Exercise[] = [
    {
      id: 1,
      question: "_____ is good for your health.",
      options: ["Exercise", "Exercising", "To exercise", "Exercised"],
      correct: 1,
      explanation: "Gerund 'exercising' digunakan sebagai subjek kalimat."
    },
    {
      id: 2,
      question: "I enjoy _____ music in my free time.",
      options: ["listen to", "listening to", "to listen to", "listened to"],
      correct: 1,
      explanation: "Verb 'enjoy' selalu diikuti gerund, jadi 'listening to'."
    },
    {
      id: 3,
      question: "She is interested _____ photography.",
      options: ["to learn", "in learning", "for learning", "at learning"],
      correct: 1,
      explanation: "Preposisi 'in' diikuti gerund 'learning'."
    },
    {
      id: 4,
      question: "Thank you for _____ me with this project.",
      options: ["help", "helping", "to help", "helped"],
      correct: 1,
      explanation: "Preposisi 'for' diikuti gerund 'helping'."
    },
    {
      id: 5,
      question: "There's no point in _____ about the past.",
      options: ["worry", "worrying", "to worry", "worried"],
      correct: 1,
      explanation: "Ekspresi 'there's no point in' selalu diikuti gerund."
    },
    {
      id: 6,
      question: "He quit _____ last year.",
      options: ["smoke", "smoking", "to smoke", "smoked"],
      correct: 1,
      explanation: "Verb 'quit' selalu diikuti gerund 'smoking'."
    },
    {
      id: 7,
      question: "I have trouble _____ early in the morning.",
      options: ["wake up", "waking up", "to wake up", "woke up"],
      correct: 1,
      explanation: "Ekspresi 'have trouble' diikuti gerund 'waking up'."
    },
    {
      id: 8,
      question: "She improved her English by _____ with native speakers.",
      options: ["practice", "practicing", "to practice", "practiced"],
      correct: 1,
      explanation: "Preposisi 'by' diikuti gerund 'practicing'."
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

  const categoryColors = {
    Subject: 'bg-blue-100 text-blue-800 border-blue-500',
    Object: 'bg-green-100 text-green-800 border-green-500',
    Preposition: 'bg-purple-100 text-purple-800 border-purple-500',
    Expression: 'bg-orange-100 text-orange-800 border-orange-500'
  }

  return (
    <Layout title="Gerund - Kata Kerja + ing">
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Semua Kategori
            </button>
            {['Subject', 'Object', 'Preposition', 'Expression'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Rules Reference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aturan Penggunaan Gerund</h2>
          <div className="space-y-6">
            {gerundRules
              .filter(rule => !selectedCategory || rule.category === selectedCategory)
              .map((rule, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${categoryColors[rule.category]}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{rule.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[rule.category]}`}>
                      {rule.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{rule.explanation}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contoh:</h4>
                      <div className="space-y-2">
                        {rule.examples.map((example, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700 italic">"{example}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {rule.commonVerbs && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {rule.category === 'Object' ? 'Kata Kerja yang Diikuti Gerund:' : 'Ekspresi Umum:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {rule.commonVerbs.map((verb, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {verb}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-semibold text-blue-900 mb-1">💡 Tips:</h4>
                      <p className="text-blue-800 text-sm">{rule.tips}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Gerund vs Infinitive Comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerund vs Infinitive</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-4">Verbs + Gerund Only</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>enjoy:</strong> I enjoy swimming.</div>
                  <div><strong>finish:</strong> She finished reading.</div>
                  <div><strong>avoid:</strong> Avoid eating late.</div>
                  <div><strong>suggest:</strong> I suggest going home.</div>
                  <div><strong>mind:</strong> Do you mind waiting?</div>
                  <div><strong>practice:</strong> Practice speaking English.</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-blue-600 mb-4">Verbs + Infinitive Only</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>want:</strong> I want to learn.</div>
                  <div><strong>decide:</strong> She decided to go.</div>
                  <div><strong>plan:</strong> We plan to visit.</div>
                  <div><strong>hope:</strong> I hope to see you.</div>
                  <div><strong>need:</strong> You need to study.</div>
                  <div><strong>promise:</strong> He promised to help.</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Perhatian:</h4>
              <p className="text-yellow-700 text-sm">
                Beberapa kata kerja bisa diikuti gerund atau infinitive dengan arti yang berbeda:
                <br />• <strong>remember:</strong> I remember locking the door (sudah dilakukan) vs I remembered to lock the door (akan dilakukan)
                <br />• <strong>stop:</strong> I stopped smoking (berhenti merokok) vs I stopped to smoke (berhenti untuk merokok)
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latihan Gerund</h2>
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
                            : 'border-teal-500 bg-teal-50'
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
                    className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700"
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
