import { Exercise } from "./types"

export const exercises: Exercise[] = [
  {
    id: 1,
    question: "I _____ swim when I was younger, but now I can't.",
    options: ["can", "could", "may", "might"],
    correct: 1,
    explanation: "'Could' digunakan untuk menyatakan kemampuan di masa lalu.",
  },
  {
    id: 2,
    question: "_____ you help me with this heavy box?",
    options: ["Can", "Must", "Should", "May"],
    correct: 0,
    explanation: "'Can' digunakan untuk meminta bantuan secara informal dan langsung.",
  },
  {
    id: 3,
    question: "You _____ wear a seatbelt while driving. It's the law.",
    options: ["can", "could", "must", "might"],
    correct: 2,
    explanation:
      "'Must' digunakan untuk menyatakan keharusan yang kuat, terutama aturan atau hukum.",
  },
  {
    id: 4,
    question: "_____ I use your phone? Mine is broken.",
    options: ["Must", "Should", "May", "Will"],
    correct: 2,
    explanation: "'May' digunakan untuk meminta izin secara formal dan sopan.",
  },
  {
    id: 5,
    question: "You _____ see a doctor about that cough.",
    options: ["can", "must", "should", "will"],
    correct: 2,
    explanation: "'Should' digunakan untuk memberikan saran atau rekomendasi.",
  },
  {
    id: 6,
    question: "It _____ rain tomorrow according to the weather forecast.",
    options: ["must", "should", "will", "can"],
    correct: 2,
    explanation: "'Will' digunakan untuk prediksi berdasarkan informasi atau bukti.",
  },
  {
    id: 7,
    question: "I _____ go to the party, but I'm not sure yet.",
    options: ["will", "must", "might", "should"],
    correct: 2,
    explanation: "'Might' digunakan untuk menyatakan kemungkinan yang tidak pasti.",
  },
  {
    id: 8,
    question: "_____ you like some tea or coffee?",
    options: ["Will", "Would", "Can", "Must"],
    correct: 1,
    explanation: "'Would' digunakan untuk menawarkan sesuatu secara sopan.",
  },
]
