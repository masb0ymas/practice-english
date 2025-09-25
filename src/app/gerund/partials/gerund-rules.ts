import { GerundRule } from "./types"

export const gerundRules: GerundRule[] = [
  {
    category: "Subject",
    title: "Gerund sebagai Subject",
    explanation:
      "Gerund dapat berfungsi sebagai subjek kalimat. Gerund sebagai subjek selalu dianggap singular.",
    examples: [
      "Swimming is my favorite sport.",
      "Reading books helps improve vocabulary.",
      "Learning English takes time and practice.",
      "Smoking is harmful to your health.",
    ],
    tips: "Gerund sebagai subjek + verb singular (is, was, has, does)",
  },
  {
    category: "Object",
    title: "Gerund sebagai Object",
    explanation:
      "Gerund dapat menjadi objek langsung dari kata kerja tertentu. Beberapa kata kerja hanya diikuti gerund.",
    examples: [
      "I enjoy reading novels.",
      "She finished doing her homework.",
      "They avoid eating junk food.",
      "He suggested going to the beach.",
    ],
    commonVerbs: [
      "enjoy",
      "finish",
      "avoid",
      "suggest",
      "mind",
      "practice",
      "quit",
      "deny",
      "admit",
      "consider",
    ],
    tips: "Beberapa verb hanya diikuti gerund, tidak infinitive",
  },
  {
    category: "Preposition",
    title: "Gerund setelah Preposition",
    explanation:
      "Setelah preposisi (in, on, at, by, for, without, dll), selalu gunakan gerund, bukan infinitive.",
    examples: [
      "I am interested in learning new languages.",
      "Thank you for helping me.",
      "She left without saying goodbye.",
      "He improved his English by practicing every day.",
    ],
    tips: "Preposition + gerund (NEVER preposition + infinitive)",
  },
  {
    category: "Expression",
    title: "Gerund dalam Ekspresi Khusus",
    explanation: "Beberapa ekspresi idiomatik selalu menggunakan gerund.",
    examples: [
      "It's no use crying over spilled milk.",
      "There's no point in arguing about it.",
      "I have trouble understanding his accent.",
      "She spent time preparing for the exam.",
    ],
    commonVerbs: [
      "spend time",
      "have trouble/difficulty",
      "it's no use",
      "there's no point",
      "can't help",
      "look forward to",
    ],
    tips: "Hafalkan ekspresi khusus yang selalu diikuti gerund",
  },
]
