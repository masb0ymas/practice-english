import Link from "next/link"
import React from "react"

interface MainLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b-2 border-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span className="text-3xl">📚</span>
                <span>Practice English</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/tenses"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Tenses
              </Link>
              <Link
                href="/modals"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Modals
              </Link>
              <Link
                href="/seom"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                SEOM
              </Link>
              <Link
                href="/ada"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                ADA
              </Link>
              <Link
                href="/comparative"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Comparative
              </Link>
              <Link
                href="/gerund"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Gerund
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">{title}</h1>
            <div className="mt-2 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
          </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Practice English. Tingkatkan kemampuan bahasa Inggris Anda
            dengan latihan yang menyenangkan!
          </p>
        </div>
      </footer>
    </div>
  )
}
