import { Exercise } from "./types"

export const exercises: Exercise[] = [
  {
    id: 1,
    question: "My house is _____ than yours.",
    options: ["big", "bigger", "biggest", "the biggest"],
    correct: 1,
    explanation: "Comparative degree untuk membandingkan dua rumah menggunakan 'bigger'.",
  },
  {
    id: 2,
    question: "This is _____ book I have ever read.",
    options: ["interesting", "more interesting", "most interesting", "the most interesting"],
    correct: 3,
    explanation: "Superlative degree dengan adjective panjang menggunakan 'the most interesting'.",
  },
  {
    id: 3,
    question: "She runs _____ her sister.",
    options: ["as fast as", "faster than", "fastest than", "the fastest"],
    correct: 0,
    explanation: "Positive degree dengan perbandingan yang sama menggunakan 'as fast as'.",
  },
  {
    id: 4,
    question: "Today's weather is _____ than yesterday's.",
    options: ["bad", "worse", "worst", "the worst"],
    correct: 1,
    explanation: "Comparative degree dari irregular adjective 'bad' adalah 'worse'.",
  },
  {
    id: 5,
    question: "Mount Everest is _____ mountain in the world.",
    options: ["high", "higher", "highest", "the highest"],
    correct: 3,
    explanation:
      "Superlative degree untuk menunjukkan gunung tertinggi di dunia menggunakan 'the highest'.",
  },
  {
    id: 6,
    question: "This problem is _____ difficult _____ I thought.",
    options: ["more, than", "as, as", "most, than", "the most, as"],
    correct: 0,
    explanation: "Comparative degree dengan adjective panjang menggunakan 'more difficult than'.",
  },
  {
    id: 7,
    question: "Among all students, Lisa is _____ one.",
    options: ["smart", "smarter", "smartest", "the smartest"],
    correct: 3,
    explanation:
      "Superlative degree untuk membandingkan di antara semua siswa menggunakan 'the smartest'.",
  },
  {
    id: 8,
    question: "Your answer is not _____ correct _____ mine.",
    options: ["as, as", "more, than", "most, than", "the most, as"],
    correct: 0,
    explanation: "Negative positive degree menggunakan 'not as correct as'.",
  },
]
