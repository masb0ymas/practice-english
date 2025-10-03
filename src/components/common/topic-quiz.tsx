"use client"

import { Lightbulb, Settings } from "lucide-react"
import { useMemo, useState } from "react"
import QuestionCard from "~/components/common/question-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Button } from "../ui/button"
import { RainbowButton } from "../ui/rainbow-button"
import SimpleDialog from "./simple-dialog"

type GeneratedQuestion = {
  id: string
  text: string
  method: string
  hint?: string
  duration?: number
}

function generateQuestions(topic: string): GeneratedQuestion[] {
  const t = topic.trim() || "your chosen topic"
  const templates = [
    `Share your overall opinion about ${t}. Give two reasons to support your view.`,
    `Describe a personal experience related to ${t} and explain what you learned.`,
    `Compare two different perspectives on ${t} and say which you prefer and why.`,
    `Explain a common problem within ${t} and propose a practical solution.`,
    `Predict how ${t} might change in the next five years and justify your prediction.`,
    `Ask your interviewer one thoughtful question about ${t} and explain why you chose it.`,
    `What do you think is the most significant challenge facing ${t} today, and why?`,
    `If you could ask one question about ${t}, what would it be, and why?`,
    `How do you think technology will change ${t} in the next decade? Give two reasons to support your view.`,
  ]
  return templates.map((text, i) => ({
    id: `${Date.now()}-${i}`,
    text,
    method: [
      "PREP",
      "STAR",
      "3-2-1",
      "Problem-Solution",
      "Compare & Contrast",
      "PEEL",
      "5W1H",
      "DESC",
      "SOAR",
    ][i],
    // stagger durations slightly for variety
    duration: [60, 75, 90, 60, 75, 90, 60, 75, 90][i],
  }))
}

export default function TopicQuiz() {
  const [topic, setTopic] = useState("")
  const [questions, setQuestions] = useState<GeneratedQuestion[]>([])
  const disabled = useMemo(() => topic.trim().length === 0, [topic])

  const [openDialog, setOpenDialog] = useState(false)

  function handleGenerate() {
    setQuestions(generateQuestions(topic))
  }

  return (
    <section aria-label="Topic Practice">
      <Card className="mx-auto mb-10 w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-lg">Choose Your Practice Topic</CardTitle>
          <CardDescription className="text-sm">
            Enter any topic you&apos;d like to practice speaking about
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-1.5 sm:flex-row">
            <label className="sr-only" htmlFor="topic-input">
              Practice Topic
            </label>
            <Input
              id="topic-input"
              placeholder="e.g., Travel experiences, Technology trends, Environment"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1"
            />
            <Button
              size="icon"
              variant="outline"
              className="shrink-0"
              onClick={() => setOpenDialog(true)}
            >
              <Settings />
            </Button>
            <RainbowButton
              onClick={handleGenerate}
              disabled={disabled}
              className="shrink-0 rounded-lg"
            >
              <span className="flex items-center justify-center mb-0.5">Generate Questions</span>
            </RainbowButton>
          </div>
        </CardContent>
      </Card>

      {questions.length === 0 ? (
        <div className="mx-auto max-w-2xl text-center pt-20">
          <div className="bg-indigo-200 p-4 mx-auto rounded-full h-16 w-16 flex items-center justify-center">
            <Lightbulb className="text-indigo-600 size-7" />
          </div>
          <h2 className="text-xl font-medium">Ready to Practice?</h2>
          <p className="mt-1 text-muted-foreground">
            Enter a topic above to generate 9 speaking practice questions.
            <br />
            Each card includes an independent timer to simulate real practice time.
          </p>
        </div>
      ) : (
        <>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold">Your Practice Questions</h2>
            <p className="text-muted-foreground">
              Each card includes an independent timer to simulate real practice time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {questions.map((q, idx) => (
              <QuestionCard
                key={q.id}
                index={idx + 1}
                text={q.text}
                method={q.method}
                defaultSeconds={q.duration ?? 60}
              />
            ))}
          </div>
        </>
      )}

      <SimpleDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title="Settings"
        description="Customize your practice experience"
      >
        <div>Test</div>
      </SimpleDialog>
    </section>
  )
}
