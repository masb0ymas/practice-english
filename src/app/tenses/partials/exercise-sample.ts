import { Exercise } from "./types"

export const exercises: Exercise[] = [
  {
    id: 1,
    question: "She _____ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correct: 1,
    explanation:
      "Simple Present tense untuk kebiasaan menggunakan 'goes' karena subjek 'she' (orang ketiga tunggal).",
  },
  {
    id: 2,
    question: "They _____ football right now.",
    options: ["play", "plays", "are playing", "played"],
    correct: 2,
    explanation:
      "Present Continuous tense untuk aktivitas yang sedang berlangsung saat ini menggunakan 'are playing'.",
  },
  {
    id: 3,
    question: "I _____ this book already.",
    options: ["read", "reads", "have read", "am reading"],
    correct: 2,
    explanation:
      "Present Perfect tense dengan 'already' menggunakan 'have read' untuk menyatakan aktivitas yang baru selesai.",
  },
  {
    id: 4,
    question: "She _____ English for 3 hours when I arrived.",
    options: ["studies", "was studying", "had been studying", "will study"],
    correct: 2,
    explanation:
      "Past Perfect Continuous tense untuk aktivitas yang berlangsung terus di masa lalu sebelum aktivitas lain terjadi.",
  },
  {
    id: 5,
    question: "He _____ his homework yesterday.",
    options: ["finish", "finished", "finishes", "finishing"],
    correct: 1,
    explanation:
      "Simple Past tense untuk aktivitas yang selesai di masa lalu menggunakan 'finished'.",
  },
  {
    id: 6,
    question: "We _____ dinner when the phone rang.",
    options: ["have", "had", "were having", "are having"],
    correct: 2,
    explanation:
      "Past Continuous tense untuk aktivitas yang sedang berlangsung di masa lalu menggunakan 'were having'.",
  },
  {
    id: 7,
    question: "By next year, I _____ English for 5 years.",
    options: ["will study", "will be studying", "will have studied", "will have been studying"],
    correct: 3,
    explanation:
      "Future Perfect Continuous tense untuk aktivitas yang akan berlangsung terus sampai waktu tertentu di masa depan.",
  },
  {
    id: 8,
    question: "She said she _____ the project by Friday.",
    options: ["will finish", "would finish", "would have finished", "will have finished"],
    correct: 2,
    explanation:
      "Past Future Perfect tense untuk menyatakan aktivitas yang akan selesai sebelum waktu tertentu dilihat dari masa lalu.",
  },
  {
    id: 9,
    question: "At 8 PM tonight, I _____ my presentation.",
    options: ["prepare", "will prepare", "will be preparing", "will have prepared"],
    correct: 2,
    explanation:
      "Future Continuous tense untuk aktivitas yang akan sedang berlangsung di waktu tertentu di masa depan.",
  },
  {
    id: 10,
    question: "They _____ the movie before we arrived.",
    options: ["watched", "were watching", "had watched", "have watched"],
    correct: 2,
    explanation:
      "Past Perfect tense untuk aktivitas yang selesai sebelum aktivitas lain di masa lalu.",
  },
]
