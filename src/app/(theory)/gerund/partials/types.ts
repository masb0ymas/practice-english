export interface GerundRule {
  category: "Subject" | "Object" | "Preposition" | "Expression"
  title: string
  explanation: string
  examples: string[]
  commonVerbs?: string[]
  tips: string
}

export interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}
