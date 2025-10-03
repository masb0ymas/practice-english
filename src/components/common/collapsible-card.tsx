import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import React, { useMemo, useState } from "react"
import { cn } from "~/lib/utils"

type Color =
  | "blue"
  | "emerald"
  | "cyan"
  | "rose"
  | "green"
  | "indigo"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow"
  | "neutral"

interface CollapsibleCardProps {
  title: string
  rule: string
  explanation: string
  activeColor?: Color
  badgeColor?: Color
  children: React.ReactNode
  defaultExpanded?: boolean
  // Optional external state management
  isExpanded?: boolean
  onClick?: () => void
}

export default function CollapsibleCard({
  title,
  rule,
  explanation,
  activeColor = "neutral",
  badgeColor = "neutral",
  children,
  defaultExpanded = false,
  isExpanded: externalIsExpanded,
  onClick,
}: CollapsibleCardProps) {
  const [internalIsExpanded, setInternalIsExpanded] = useState(defaultExpanded)

  // Use external state if provided, otherwise use internal state
  const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded

  const handleToggle = () => {
    if (onClick) {
      onClick()
    } else {
      setInternalIsExpanded(!internalIsExpanded)
    }
  }

  const switchActiveColor = useMemo(() => {
    switch (activeColor) {
      case "blue":
        return "border-blue-500 shadow-lg"
      case "emerald":
        return "border-emerald-500 shadow-lg"
      case "cyan":
        return "border-cyan-500 shadow-lg"
      case "green":
        return "border-green-500 shadow-lg"
      case "indigo":
        return "border-indigo-500 shadow-lg"
      case "orange":
        return "border-orange-500 shadow-lg"
      case "pink":
        return "border-pink-500 shadow-lg"
      case "purple":
        return "border-purple-500 shadow-lg"
      case "red":
        return "border-red-500 shadow-lg"
      case "yellow":
        return "border-yellow-500 shadow-lg"
      case "rose":
        return "border-rose-500 shadow-lg"
      default:
        return "border-neutral-500 shadow-lg"
    }
  }, [activeColor])

  const switchBadgeColor = useMemo(() => {
    switch (badgeColor) {
      case "blue":
        return "bg-blue-100 text-blue-800"
      case "emerald":
        return "bg-emerald-100 text-emerald-800"
      case "cyan":
        return "bg-cyan-100 text-cyan-800"
      case "green":
        return "bg-green-100 text-green-800"
      case "indigo":
        return "bg-indigo-100 text-indigo-800"
      case "orange":
        return "bg-orange-100 text-orange-800"
      case "pink":
        return "bg-pink-100 text-pink-800"
      case "purple":
        return "bg-purple-100 text-purple-800"
      case "red":
        return "bg-red-100 text-red-800"
      case "yellow":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-neutral-100 text-neutral-800"
    }
  }, [badgeColor])

  return (
    <motion.div
      className={cn(
        "bg-white rounded-lg shadow-md border-l-4 cursor-pointer transition-all",
        activeColor === "neutral" ? "border-neutral-300 hover:shadow-lg" : switchActiveColor
      )}
      layout
      initial={false}
      animate={{
        boxShadow: isExpanded
          ? "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="p-6 space-y-4" onClick={handleToggle}>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-3">
            <div className={cn("px-3 py-1 rounded-full text-xs font-semibold", switchBadgeColor)}>
              {rule}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-500"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </div>

        <p className="text-gray-600">{explanation}</p>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
