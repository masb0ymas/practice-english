"use client"

import { ArrowUpFromLine } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "~/lib/utils"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 flex items-center justify-center right-4 z-50 p-2 w-10 h-10 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <ArrowUpFromLine className="size-5" />
    </button>
  )
}
