import { Suspense } from "react"
import TopicQuiz from "~/components/common/topic-quiz"

export default function QuestionPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading…</div>}>
      <TopicQuiz />
    </Suspense>
  )
}
