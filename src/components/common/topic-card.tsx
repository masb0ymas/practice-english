import Link from "next/link"

interface TopicCardProps {
  title: string
  description: string
  icon: string
  path: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  exercises: number
}

export default function TopicCard({
  title,
  description,
  icon,
  path,
  difficulty,
  exercises,
}: TopicCardProps) {
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }

  return (
    <Link href={path} className="block group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{icon}</div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{exercises} latihan</span>
          <div className="flex items-center text-indigo-600 text-sm font-medium group-hover:text-indigo-800">
            Mulai Belajar
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
