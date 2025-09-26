export interface TenseRules {
  tense: string
  formula: {
    positive: string
    negative: string
    interrogative: string
  }
  examples: {
    positive: {
      I: string
      you: string
      we: string
      they: string
      she: string
      he: string
      it: string
    }
    negative: {
      I: string
      you: string
      we: string
      they: string
      she: string
      he: string
      it: string
    }
    interrogative: {
      I: string
      you: string
      we: string
      they: string
      she: string
      he: string
      it: string
    }
  }
  usage: string
  timeGroup: "Present" | "Past" | "Future"
}
