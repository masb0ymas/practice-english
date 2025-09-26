import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react"
import { cn } from "~/lib/utils"

type Color = "blue" | "emerald" | "green" | "indigo" | "orange" | "pink" | "purple" | "red" | "yellow" | "neutral"

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

  return (
    <motion.div
      className={cn(
        "bg-white rounded-lg shadow-md border-l-4 cursor-pointer transition-all",
        activeColor === "neutral"
          ? "border-neutral-300 hover:shadow-lg"
          : `border-${activeColor}-500 shadow-lg`
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
      <div className="p-6" onClick={handleToggle}>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <div className="flex items-center gap-3">
            <div
              className={cn(
                `bg-${badgeColor}-100 text-${badgeColor}-800`,
                "px-3 py-1 rounded-full text-xs font-semibold"
              )}
            >
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

        <p className="text-gray-600 mb-3">{explanation}</p>
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
