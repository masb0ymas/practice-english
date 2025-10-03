export interface AdaRule {
  category: "Articles" | "Determiners" | "Adjectives"
  title: string
  explanation: string
  examples: { correct: string; incorrect?: string }[]
  tips: string
}

export interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}
