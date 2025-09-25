import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "../components/Layout"
import { useState } from "react"

export const Route = createFileRoute("/ada")({
  component: AdaPage,
})

interface AdaRule {
  category: 'Articles' | 'Determiners' | 'Adjectives'
  title: string
  explanation: string
  examples: { correct: string; incorrect?: string }[]
  tips: string
}

interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

function AdaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const adaRules: AdaRule[] = [
    {
      category: 'Articles',
      title: 'Indefinite Articles (A/An)',
      explanation: 'Gunakan "a" sebelum kata yang dimulai dengan bunyi konsonan, "an" sebelum kata yang dimulai dengan bunyi vokal.',
      examples: [
        { correct: 'a book, a university, a European' },
        { correct: 'an apple, an hour, an honest person' },
        { correct: 'a one-way street (bunyi "w")', incorrect: 'an one-way street' }
      ],
      tips: 'Perhatikan bunyi, bukan huruf! "University" dimulai bunyi "yu" (konsonan), "hour" dimulai bunyi vokal.'
    },
    {
      category: 'Articles',
      title: 'Definite Article (The)',
      explanation: 'Gunakan "the" untuk benda spesifik yang sudah diketahui pembaca/pendengar.',
      examples: [
        { correct: 'The book on the table is mine.' },
        { correct: 'I saw a movie. The movie was great.' },
        { correct: 'The sun rises in the east.' }
      ],
      tips: 'Gunakan "the" untuk: benda unik (the sun), benda yang sudah disebutkan, atau benda yang jelas dari konteks.'
    },
    {
      category: 'Articles',
      title: 'Zero Article',
      explanation: 'Tidak menggunakan artikel untuk kata benda umum (plural/uncountable), nama negara, bahasa, dll.',
      examples: [
        { correct: 'I like cats.', incorrect: 'I like the cats.' },
        { correct: 'She speaks English.', incorrect: 'She speaks the English.' },
        { correct: 'Water is essential.', incorrect: 'The water is essential.' }
      ],
      tips: 'Tidak pakai artikel untuk: generalisasi, nama bahasa, nama negara (kecuali yang mengandung "states", "kingdom", dll).'
    },
    {
      category: 'Determiners',
      title: 'This/That, These/Those',
      explanation: 'This/these untuk benda dekat, that/those untuk benda jauh. This/that untuk singular, these/those untuk plural.',
      examples: [
        { correct: 'This book (dekat, singular)' },
        { correct: 'These books (dekat, plural)' },
        { correct: 'That car (jauh, singular)' },
        { correct: 'Those cars (jauh, plural)' }
      ],
      tips: 'Dekat = this/these, Jauh = that/those. Singular = this/that, Plural = these/those.'
    },
    {
      category: 'Determiners',
      title: 'Some/Any',
      explanation: 'Some untuk kalimat positif, any untuk kalimat negatif dan tanya. Some juga bisa untuk penawaran sopan.',
      examples: [
        { correct: 'I have some money.' },
        { correct: 'I don\'t have any money.' },
        { correct: 'Do you have any money?' },
        { correct: 'Would you like some coffee?' }
      ],
      tips: 'Some = positif & penawaran, Any = negatif & tanya.'
    },
    {
      category: 'Determiners',
      title: 'Much/Many/A lot of',
      explanation: 'Much untuk uncountable, many untuk countable, a lot of untuk keduanya (lebih informal).',
      examples: [
        { correct: 'I don\'t have much time.' },
        { correct: 'There aren\'t many students.' },
        { correct: 'I have a lot of friends.' },
        { correct: 'She has a lot of money.' }
      ],
      tips: 'Much + uncountable, Many + countable, A lot of + both (informal).'
    },
    {
      category: 'Adjectives',
      title: 'Adjective Order',
      explanation: 'Urutan adjective: Opinion-Size-Age-Shape-Color-Origin-Material-Purpose + Noun',
      examples: [
        { correct: 'A beautiful small old round red Chinese wooden dining table.' },
        { correct: 'A nice big new blue car.' },
        { correct: 'An expensive Italian leather jacket.' }
      ],
      tips: 'Ingat: OSASCOMP (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose).'
    },
    {
      category: 'Adjectives',
      title: 'Adjectives vs Adverbs',
      explanation: 'Adjective menjelaskan noun, adverb menjelaskan verb/adjective/adverb lain.',
      examples: [
        { correct: 'She is a careful driver. (adjective)' },
        { correct: 'She drives carefully. (adverb)' },
        { correct: 'The food tastes good. (adjective)', incorrect: 'The food tastes well.' }
      ],
      tips: 'Adjective + noun, Verb + adverb. Hati-hati dengan linking verbs (taste, smell, feel) + adjective.'
    }
  ]

  const exercises: Exercise[] = [
    {
      id: 1,
      question: "I need _____ honest answer from you.",
      options: ["a", "an", "the", "no article"],
      correct: 1,
      explanation: "'Honest' dimulai dengan bunyi vokal /ɒ/, jadi gunakan 'an'."
    },
    {
      id: 2,
      question: "_____ book you lent me was very interesting.",
      options: ["A", "An", "The", "No article"],
      correct: 2,
      explanation: "Buku spesifik yang sudah disebutkan (yang kamu pinjamkan), jadi gunakan 'the'."
    },
    {
      id: 3,
      question: "I don't have _____ time to finish this project.",
      options: ["some", "any", "many", "few"],
      correct: 1,
      explanation: "Kalimat negatif dengan uncountable noun 'time', jadi gunakan 'any'."
    },
    {
      id: 4,
      question: "_____ students in our class are very smart.",
      options: ["This", "That", "These", "Those"],
      correct: 2,
      explanation: "'Students' adalah plural dan dekat dengan pembicara, jadi gunakan 'these'."
    },
    {
      id: 5,
      question: "She bought a _____ dress.",
      options: ["beautiful red silk", "red beautiful silk", "silk beautiful red", "red silk beautiful"],
      correct: 0,
      explanation: "Urutan adjective: Opinion (beautiful) - Color (red) - Material (silk)."
    },
    {
      id: 6,
      question: "How _____ money do you need?",
      options: ["many", "much", "few", "little"],
      correct: 1,
      explanation: "'Money' adalah uncountable noun, jadi gunakan 'much' untuk pertanyaan."
    },
    {
      id: 7,
      question: "The cake smells _____.",
      options: ["good", "well", "goodly", "better"],
      correct: 0,
      explanation: "'Smell' adalah linking verb, jadi diikuti adjective 'good', bukan adverb 'well'."
    },
    {
      id: 8,
      question: "Would you like _____ coffee?",
      options: ["some", "any", "a", "an"],
      correct: 0,
      explanation: "Penawaran sopan menggunakan 'some', meskipun dalam bentuk pertanyaan."
    },
    {
      id: 9,
      question: "I saw _____ European tourist at the museum.",
      options: ["a", "an", "the", "no article"],
      correct: 0,
      explanation: "'European' dimulai dengan bunyi konsonan /j/, jadi gunakan 'a'."
    },
    {
      id: 10,
      question: "There are _____ apples in the basket.",
      options: ["much", "many", "a lot", "few"],
      correct: 1,
      explanation: "'Apples' adalah countable noun plural, jadi gunakan 'many'."
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

  const categories = ['Articles', 'Determiners', 'Adjectives']
  const categoryColors = {
    Articles: 'bg-blue-100 text-blue-800 border-blue-500',
    Determiners: 'bg-green-100 text-green-800 border-green-500',
    Adjectives: 'bg-purple-100 text-purple-800 border-purple-500'
  }

  return (
    <Layout title="ADA - Articles, Determiners & Adjectives">
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
            {categories.map(category => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aturan ADA</h2>
          <div className="space-y-6">
            {adaRules
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
                            <p className="text-green-700 mb-2 italic">"{example.correct}"</p>
                            {example.incorrect && (
                              <>
                                <div className="flex items-center text-red-600 mb-1">
                                  <span className="text-red-500 mr-2">✗</span>
                                  <span className="text-sm font-medium">Salah:</span>
                                </div>
                                <p className="text-red-700 italic">"{example.incorrect}"</p>
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
                <div><strong>a/an:</strong> benda tidak spesifik</div>
                <div><strong>the:</strong> benda spesifik</div>
                <div><strong>zero:</strong> generalisasi</div>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs">
                  <strong>Tip:</strong> Dengarkan bunyi pertama, bukan huruf!
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-green-600 mb-4">Determiners</h3>
              <div className="space-y-2 text-sm">
                <div><strong>this/these:</strong> dekat</div>
                <div><strong>that/those:</strong> jauh</div>
                <div><strong>some:</strong> positif</div>
                <div><strong>any:</strong> negatif/tanya</div>
                <div><strong>much:</strong> uncountable</div>
                <div><strong>many:</strong> countable</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-4">Adjectives</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Urutan:</strong> OSASCOMP</div>
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
                              ? 'border-green-500 bg-green-50 text-green-800'
                              : 'border-red-500 bg-red-50 text-red-800'
                            : 'border-orange-500 bg-orange-50'
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
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
              <div className="mb-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Ringkasan Hasil:</h4>
                  <div className="text-sm text-gray-600">
                    {score === exercises.length && "Sempurna! Anda menguasai ADA dengan sangat baik! 🌟"}
                    {score >= exercises.length * 0.8 && score < exercises.length && "Bagus sekali! Anda hampir menguasai semua materi ADA! 👍"}
                    {score >= exercises.length * 0.6 && score < exercises.length * 0.8 && "Cukup baik! Terus berlatih untuk meningkatkan pemahaman ADA Anda! 📚"}
                    {score < exercises.length * 0.6 && "Perlu lebih banyak latihan. Baca kembali materi dan coba lagi! 💪"}
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
    </Layout>
  )
}
