import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "../components/Layout"
import { TopicCard } from "../components/TopicCard"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  const topics = [
    {
      title: "Tenses",
      description: "Pelajari 16 tenses lengkap dalam bahasa Inggris, dikelompokkan berdasarkan Present, Past, dan Future dengan contoh dan latihan interaktif.",
      icon: "⏰",
      path: "/tenses",
      difficulty: "Beginner" as const,
      exercises: 50
    },
    {
      title: "Modal & Auxiliary Verbs",
      description: "Kuasai penggunaan kata kerja bantu seperti can, could, will, would, must, should, dan lainnya dalam berbagai konteks.",
      icon: "🔧",
      path: "/modals",
      difficulty: "Intermediate" as const,
      exercises: 32
    },
    {
      title: "SEOM (Subject-Verb Agreement)",
      description: "Pelajari kesesuaian antara subjek dan kata kerja dalam kalimat bahasa Inggris dengan berbagai aturan dan pengecualian.",
      icon: "🤝",
      path: "/seom",
      difficulty: "Intermediate" as const,
      exercises: 28
    },
    {
      title: "ADA (Articles, Determiners, Adjectives)",
      description: "Pahami penggunaan artikel (a, an, the), determiner, dan adjective untuk membuat kalimat yang lebih akurat dan natural.",
      icon: "📝",
      path: "/ada",
      difficulty: "Beginner" as const,
      exercises: 38
    },
    {
      title: "Comparative Degree",
      description: "Belajar membandingkan benda, orang, atau situasi menggunakan comparative dan superlative degree dengan benar.",
      icon: "📊",
      path: "/comparative",
      difficulty: "Beginner" as const,
      exercises: 25
    },
    {
      title: "Gerund",
      description: "Kuasai penggunaan gerund (kata kerja + ing) sebagai subjek, objek, dan dalam berbagai konstruksi kalimat bahasa Inggris.",
      icon: "🔄",
      path: "/gerund",
      difficulty: "Advanced" as const,
      exercises: 22
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Practice <span className="text-indigo-600">English</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tingkatkan kemampuan bahasa Inggris Anda dengan latihan interaktif yang menyenangkan. 
            Pelajari grammar, tenses, dan berbagai aspek penting bahasa Inggris secara sistematis.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
            <span className="text-2xl">🎯</span>
            <div className="text-left">
              <div className="font-semibold text-gray-900">200+ Latihan</div>
              <div className="text-sm text-gray-600">Soal interaktif</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
            <span className="text-2xl">📈</span>
            <div className="text-left">
              <div className="font-semibold text-gray-900">6 Topik Utama</div>
              <div className="text-sm text-gray-600">Materi lengkap</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Feedback Instan</div>
              <div className="text-sm text-gray-600">Koreksi langsung</div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Pilih Topik yang Ingin Dipelajari
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <TopicCard key={index} {...topic} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Siap Memulai Perjalanan Belajar?</h2>
        <p className="text-indigo-100 mb-6 text-lg">
          Mulai dengan topik yang paling menarik bagi Anda atau ikuti urutan yang disarankan untuk hasil optimal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/tenses" 
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Mulai dari Tenses
          </a>
          <a 
            href="/modals" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Langsung ke Modal Verbs
          </a>
        </div>
      </div>
    </Layout>
  )
}
