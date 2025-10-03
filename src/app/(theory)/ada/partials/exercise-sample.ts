import { Exercise } from "./types"

export const exercises: Exercise[] = [
  {
    id: 1,
    question: "I need _____ honest answer from you.",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "'Honest' dimulai dengan bunyi vokal /ɒ/, jadi gunakan 'an'.",
  },
  {
    id: 2,
    question: "_____ book you lent me was very interesting.",
    options: ["A", "An", "The", "No article"],
    correct: 2,
    explanation: "Buku spesifik yang sudah disebutkan (yang kamu pinjamkan), jadi gunakan 'the'.",
  },
  {
    id: 3,
    question: "I don't have _____ time to finish this project.",
    options: ["some", "any", "many", "few"],
    correct: 1,
    explanation: "Kalimat negatif dengan uncountable noun 'time', jadi gunakan 'any'.",
  },
  {
    id: 4,
    question: "_____ students in our class are very smart.",
    options: ["This", "That", "These", "Those"],
    correct: 2,
    explanation: "'Students' adalah plural dan dekat dengan pembicara, jadi gunakan 'these'.",
  },
  {
    id: 5,
    question: "She bought a _____ dress.",
    options: [
      "beautiful red silk",
      "red beautiful silk",
      "silk beautiful red",
      "red silk beautiful",
    ],
    correct: 0,
    explanation: "Urutan adjective: Opinion (beautiful) - Color (red) - Material (silk).",
  },
  {
    id: 6,
    question: "How _____ money do you need?",
    options: ["many", "much", "few", "little"],
    correct: 1,
    explanation: "'Money' adalah uncountable noun, jadi gunakan 'much' untuk pertanyaan.",
  },
  {
    id: 7,
    question: "The cake smells _____.",
    options: ["good", "well", "goodly", "better"],
    correct: 0,
    explanation: "'Smell' adalah linking verb, jadi diikuti adjective 'good', bukan adverb 'well'.",
  },
  {
    id: 8,
    question: "Would you like _____ coffee?",
    options: ["some", "any", "a", "an"],
    correct: 0,
    explanation: "Penawaran sopan menggunakan 'some', meskipun dalam bentuk pertanyaan.",
  },
  {
    id: 9,
    question: "I saw _____ European tourist at the museum.",
    options: ["a", "an", "the", "no article"],
    correct: 0,
    explanation: "'European' dimulai dengan bunyi konsonan /j/, jadi gunakan 'a'.",
  },
  {
    id: 10,
    question: "There are _____ apples in the basket.",
    options: ["much", "many", "a lot", "few"],
    correct: 1,
    explanation: "'Apples' adalah countable noun plural, jadi gunakan 'many'.",
  },
]
