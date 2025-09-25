export interface ModalVerb {
  modal: string
  meaning: string
  usage: string[]
  examples: string[]
  formality: "Formal" | "Informal" | "Both"
}

export interface Exercise {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}
