import { AdaRule } from "./types"

export const adaRules: AdaRule[] = [
  {
    category: "Articles",
    title: "Indefinite Articles (A/An)",
    explanation:
      'Gunakan "a" sebelum kata yang dimulai dengan bunyi konsonan, "an" sebelum kata yang dimulai dengan bunyi vokal.',
    examples: [
      { correct: "a book, a university, a European" },
      { correct: "an apple, an hour, an honest person" },
      { correct: 'a one-way street (bunyi "w")', incorrect: "an one-way street" },
    ],
    tips: 'Perhatikan bunyi, bukan huruf! "University" dimulai bunyi "yu" (konsonan), "hour" dimulai bunyi vokal.',
  },
  {
    category: "Articles",
    title: "Definite Article (The)",
    explanation: 'Gunakan "the" untuk benda spesifik yang sudah diketahui pembaca/pendengar.',
    examples: [
      { correct: "The book on the table is mine." },
      { correct: "I saw a movie. The movie was great." },
      { correct: "The sun rises in the east." },
    ],
    tips: 'Gunakan "the" untuk: benda unik (the sun), benda yang sudah disebutkan, atau benda yang jelas dari konteks.',
  },
  {
    category: "Articles",
    title: "Zero Article",
    explanation:
      "Tidak menggunakan artikel untuk kata benda umum (plural/uncountable), nama negara, bahasa, dll.",
    examples: [
      { correct: "I like cats.", incorrect: "I like the cats." },
      { correct: "She speaks English.", incorrect: "She speaks the English." },
      { correct: "Water is essential.", incorrect: "The water is essential." },
    ],
    tips: 'Tidak pakai artikel untuk: generalisasi, nama bahasa, nama negara (kecuali yang mengandung "states", "kingdom", dll).',
  },
  {
    category: "Determiners",
    title: "This/That, These/Those",
    explanation:
      "This/these untuk benda dekat, that/those untuk benda jauh. This/that untuk singular, these/those untuk plural.",
    examples: [
      { correct: "This book (dekat, singular)" },
      { correct: "These books (dekat, plural)" },
      { correct: "That car (jauh, singular)" },
      { correct: "Those cars (jauh, plural)" },
    ],
    tips: "Dekat = this/these, Jauh = that/those. Singular = this/that, Plural = these/those.",
  },
  {
    category: "Determiners",
    title: "Some/Any",
    explanation:
      "Some untuk kalimat positif, any untuk kalimat negatif dan tanya. Some juga bisa untuk penawaran sopan.",
    examples: [
      { correct: "I have some money." },
      { correct: "I don't have any money." },
      { correct: "Do you have any money?" },
      { correct: "Would you like some coffee?" },
    ],
    tips: "Some = positif & penawaran, Any = negatif & tanya.",
  },
  {
    category: "Determiners",
    title: "Much/Many/A lot of",
    explanation:
      "Much untuk uncountable, many untuk countable, a lot of untuk keduanya (lebih informal).",
    examples: [
      { correct: "I don't have much time." },
      { correct: "There aren't many students." },
      { correct: "I have a lot of friends." },
      { correct: "She has a lot of money." },
    ],
    tips: "Much + uncountable, Many + countable, A lot of + both (informal).",
  },
  {
    category: "Adjectives",
    title: "Adjective Order",
    explanation: "Urutan adjective: Opinion-Size-Age-Shape-Color-Origin-Material-Purpose + Noun",
    examples: [
      { correct: "A beautiful small old round red Chinese wooden dining table." },
      { correct: "A nice big new blue car." },
      { correct: "An expensive Italian leather jacket." },
    ],
    tips: "Ingat: OSASCOMP (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose).",
  },
  {
    category: "Adjectives",
    title: "Adjectives vs Adverbs",
    explanation: "Adjective menjelaskan noun, adverb menjelaskan verb/adjective/adverb lain.",
    examples: [
      { correct: "She is a careful driver. (adjective)" },
      { correct: "She drives carefully. (adverb)" },
      { correct: "The food tastes good. (adjective)", incorrect: "The food tastes well." },
    ],
    tips: "Adjective + noun, Verb + adverb. Hati-hati dengan linking verbs (taste, smell, feel) + adjective.",
  },
]
