"use client"

import { MessageCircleQuestionMark } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import Timer from "~/components/common/timer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { cn } from "~/lib/utils"
import { Button } from "../ui/button"

interface QuestionCardProps {
  index: number
  text: string
  method: string
  defaultSeconds?: number
}

export default function QuestionCard({
  index,
  text,
  method,
  defaultSeconds = 60,
}: QuestionCardProps) {
  const [isFlipped, setIsFlipped] = useState(true)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="relative min-h-80 w-full perspective-1000">
      <motion.div
        className="relative h-full w-full cursor-pointer"
        onClick={handleFlip}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card className={cn("h-full", "gap-4")}>
            <CardHeader>
              <CardTitle className="sr-only">Question {index}</CardTitle>
              <div className="bg-neutral-100 p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <Timer durationSeconds={defaultSeconds} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold">Question {index}</h3>
              <p className="text-pretty">{text}</p>
            </CardContent>
            <CardFooter className="absolute bottom-4 left-0 right-0">
              <div className="flex justify-between items-center w-full">
                <div className="text-sm flex flex-row gap-1 items-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full hover:bg-indigo-100 transition-colors duration-300"
                  >
                    <MessageCircleQuestionMark className="size-4.5 text-indigo-600" />
                  </Button>
                  <span className="font-semibold">{method}</span>
                  <span className="text-muted-foreground">Method</span>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Click to flip back</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Card
            className={cn(
              "h-full",
              "gap-4",
              "bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0"
            )}
          >
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl font-bold mb-4 opacity-90">{index}</div>
                <div className="text-xl font-semibold opacity-80">Question Number</div>
                <p className="text-sm opacity-70 mt-4">Click to flip card</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
