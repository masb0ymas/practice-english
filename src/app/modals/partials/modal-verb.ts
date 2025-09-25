import { ModalVerb } from "./types"

export const modalVerbs: ModalVerb[] = [
  {
    modal: "Can",
    meaning: "Kemampuan, Izin (informal)",
    usage: ["Menyatakan kemampuan", "Meminta izin (informal)", "Menyatakan kemungkinan"],
    examples: ["I can speak English fluently.", "Can I borrow your pen?", "It can be dangerous."],
    formality: "Informal",
  },
  {
    modal: "Could",
    meaning: "Kemampuan masa lalu, Izin (formal), Saran",
    usage: [
      "Kemampuan di masa lalu",
      "Meminta izin (lebih sopan)",
      "Memberikan saran",
      "Kemungkinan",
    ],
    examples: [
      "I could swim when I was 5.",
      "Could you help me, please?",
      "You could try calling him.",
      "It could rain tomorrow.",
    ],
    formality: "Formal",
  },
  {
    modal: "Will",
    meaning: "Masa depan, Janji, Keputusan spontan",
    usage: ["Menyatakan masa depan", "Membuat janji", "Keputusan spontan", "Prediksi"],
    examples: [
      "I will visit you tomorrow.",
      "I will help you with this project.",
      "I'll have the chicken, please.",
      "It will be sunny tomorrow.",
    ],
    formality: "Both",
  },
  {
    modal: "Would",
    meaning: "Kondisional, Permintaan sopan, Kebiasaan masa lalu",
    usage: ["Conditional sentences", "Permintaan sopan", "Kebiasaan masa lalu", "Preferensi"],
    examples: [
      "I would go if I had time.",
      "Would you like some coffee?",
      "He would always arrive early.",
      "I would prefer tea.",
    ],
    formality: "Formal",
  },
  {
    modal: "Must",
    meaning: "Keharusan kuat, Kesimpulan logis",
    usage: ["Keharusan yang kuat", "Kesimpulan berdasarkan bukti", "Aturan/hukum"],
    examples: [
      "You must wear a helmet.",
      "She must be tired after the long journey.",
      "Students must submit assignments on time.",
    ],
    formality: "Formal",
  },
  {
    modal: "Should",
    meaning: "Saran, Kewajiban moral",
    usage: ["Memberikan saran", "Kewajiban moral", "Kemungkinan", "Kritik halus"],
    examples: [
      "You should see a doctor.",
      "We should help the poor.",
      "The train should arrive soon.",
      "You should have told me earlier.",
    ],
    formality: "Both",
  },
  {
    modal: "May",
    meaning: "Izin formal, Kemungkinan",
    usage: ["Meminta izin (formal)", "Memberikan izin", "Kemungkinan", "Harapan"],
    examples: [
      "May I come in?",
      "You may leave now.",
      "It may rain this afternoon.",
      "May you have a wonderful day!",
    ],
    formality: "Formal",
  },
  {
    modal: "Might",
    meaning: "Kemungkinan kecil, Izin (sangat formal)",
    usage: ["Kemungkinan yang kecil", "Saran halus", "Izin (sangat formal)"],
    examples: [
      "I might go to the party.",
      "You might want to reconsider.",
      "Might I suggest an alternative?",
    ],
    formality: "Formal",
  },
]
