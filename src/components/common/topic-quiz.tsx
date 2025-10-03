"use client"

import { div } from "motion/react-client"
import { useMemo, useState } from "react"
import QuestionCard from "~/components/common/question-card"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"

type GeneratedQuestion = {
  id: string
  text: string
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
  ]
  return templates.map((text, i) => ({
    id: `${Date.now()}-${i}`,
    text,
    // stagger durations slightly for variety
    duration: [60, 75, 90, 60, 75, 90][i],
  }))
}

export default function TopicQuiz() {
  const [topic, setTopic] = useState("")
  const [questions, setQuestions] = useState<GeneratedQuestion[]>([])
  const disabled = useMemo(() => topic.trim().length === 0, [topic])

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
          <div className="flex flex-col items-center gap-3 sm:flex-row">
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
            <Button onClick={handleGenerate} disabled={disabled} className="shrink-0">
              Generate Questions
            </Button>
          </div>
        </CardContent>
      </Card>

      {questions.length === 0 ? (
        <div className="mx-auto max-w-2xl text-center text-muted-foreground">
          <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-secondary/60" aria-hidden />
          <h2 className="text-xl font-medium">Ready to Practice?</h2>
          <p className="mt-1">
            Enter a topic above to generate 6 speaking practice questions. Each card includes an
            independent timer to simulate real practice time.
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
                defaultSeconds={q.duration ?? 60}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
