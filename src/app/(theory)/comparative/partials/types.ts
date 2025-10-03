export interface ComparativeRule {
  type: "Positive" | "Comparative" | "Superlative"
  title: string
  explanation: string
  rules: string[]
  examples: { adjective: string; comparative: string; superlative: string; sentence: string }[]
}

export interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}
