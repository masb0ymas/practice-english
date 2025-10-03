import { ComparativeRule } from "./types"

export const comparativeRules: ComparativeRule[] = [
  {
    type: "Positive",
    title: "Positive Degree",
    explanation:
      "Bentuk dasar adjective tanpa perbandingan. Digunakan untuk menyatakan kualitas tanpa membandingkan.",
    rules: [
      "Menggunakan as...as untuk perbandingan yang sama",
      "Menggunakan not as...as untuk menyatakan tidak sama",
    ],
    examples: [
      {
        adjective: "tall",
        comparative: "taller",
        superlative: "tallest",
        sentence: "She is as tall as her brother.",
      },
      {
        adjective: "beautiful",
        comparative: "more beautiful",
        superlative: "most beautiful",
        sentence: "The garden is not as beautiful as before.",
      },
    ],
  },
  {
    type: "Comparative",
    title: "Comparative Degree",
    explanation: "Digunakan untuk membandingkan dua benda, orang, atau situasi.",
    rules: [
      "Adjective pendek (1-2 suku kata): + er (tall → taller)",
      "Adjective panjang (3+ suku kata): more + adjective (beautiful → more beautiful)",
      "Irregular adjectives: good → better, bad → worse, far → farther/further",
    ],
    examples: [
      {
        adjective: "tall",
        comparative: "taller",
        superlative: "tallest",
        sentence: "John is taller than Mike.",
      },
      {
        adjective: "expensive",
        comparative: "more expensive",
        superlative: "most expensive",
        sentence: "This car is more expensive than that one.",
      },
      {
        adjective: "good",
        comparative: "better",
        superlative: "best",
        sentence: "This book is better than the previous one.",
      },
    ],
  },
  {
    type: "Superlative",
    title: "Superlative Degree",
    explanation:
      "Digunakan untuk membandingkan tiga atau lebih benda dan menunjukkan yang paling ekstrem.",
    rules: [
      "Adjective pendek: the + adjective + est (tall → the tallest)",
      "Adjective panjang: the most + adjective (beautiful → the most beautiful)",
      "Irregular adjectives: good → the best, bad → the worst",
    ],
    examples: [
      {
        adjective: "tall",
        comparative: "taller",
        superlative: "tallest",
        sentence: "John is the tallest student in the class.",
      },
      {
        adjective: "expensive",
        comparative: "more expensive",
        superlative: "most expensive",
        sentence: "This is the most expensive car in the showroom.",
      },
      {
        adjective: "good",
        comparative: "better",
        superlative: "best",
        sentence: "This is the best movie I have ever seen.",
      },
    ],
  },
]
