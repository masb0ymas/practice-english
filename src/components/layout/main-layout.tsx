import React from "react"
import ScrollToTop from "../common/scroll-to-top"
import Footer from "./footer"
import Navbar from "./navbar"

interface MainLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 lg:py-15">
        {title && (
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">{title}</h1>
            <div className="mt-2 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
          </div>
        )}
        {children}
      </main>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </div>
  )
}
