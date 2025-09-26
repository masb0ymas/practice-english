import { SeomRules } from "~/types/seom"

export const seomRules: SeomRules[] = [
  {
    rule: "Singular Subject + Singular Verb",
    explanation:
      "Subjek tunggal harus diikuti dengan kata kerja tunggal (menambahkan -s/-es untuk orang ketiga tunggal).",
    examples: [
      { correct: "She walks to school every day.", incorrect: "She walk to school every day." },
      { correct: "The cat sleeps on the sofa.", incorrect: "The cat sleep on the sofa." },
      { correct: "He studies English hard.", incorrect: "He study English hard." },
    ],
    tips: "Ingat: He, She, It + Verb + s/es",
  },
  {
    rule: "Plural Subject + Plural Verb",
    explanation: "Subjek jamak harus diikuti dengan kata kerja jamak (tanpa menambahkan -s/-es).",
    examples: [
      { correct: "They walk to school every day.", incorrect: "They walks to school every day." },
      { correct: "The cats sleep on the sofa.", incorrect: "The cats sleeps on the sofa." },
      { correct: "We study English together.", incorrect: "We studies English together." },
    ],
    tips: "Ingat: They, We, You + Verb (tanpa s/es)",
  },
  {
    rule: "Collective Nouns",
    explanation:
      "Kata benda kolektif bisa singular atau plural tergantung konteks. Jika bertindak sebagai satu unit, gunakan singular.",
    examples: [
      { correct: "The team is playing well.", incorrect: "The team are playing well." },
      { correct: "The family lives in Jakarta.", incorrect: "The family live in Jakarta." },
      { correct: "The class starts at 8 AM.", incorrect: "The class start at 8 AM." },
    ],
    tips: "Team, family, class, group biasanya dianggap singular",
  },
  {
    rule: "Indefinite Pronouns",
    explanation: "Kata ganti tak tentu seperti everyone, somebody, nothing selalu singular.",
    examples: [
      { correct: "Everyone is ready.", incorrect: "Everyone are ready." },
      { correct: "Somebody has left their bag.", incorrect: "Somebody have left their bag." },
      { correct: "Nothing seems right.", incorrect: "Nothing seem right." },
    ],
    tips: "Everyone, someone, anybody, nothing, each = singular",
  },
  {
    rule: "Either...or / Neither...nor",
    explanation: "Kata kerja mengikuti subjek yang terdekat dengan kata kerja.",
    examples: [
      {
        correct: "Either John or his friends are coming.",
        incorrect: "Either John or his friends is coming.",
      },
      {
        correct: "Neither the students nor the teacher is here.",
        incorrect: "Neither the students nor the teacher are here.",
      },
      {
        correct: "Either the books or the pen is on the table.",
        incorrect: "Either the books or the pen are on the table.",
      },
    ],
    tips: "Lihat subjek yang paling dekat dengan kata kerja",
  },
  {
    rule: "There is/are",
    explanation: "Gunakan 'there is' untuk singular dan 'there are' untuk plural.",
    examples: [
      { correct: "There is a book on the table.", incorrect: "There are a book on the table." },
      {
        correct: "There are many students in the class.",
        incorrect: "There is many students in the class.",
      },
      {
        correct: "There is some water in the glass.",
        incorrect: "There are some water in the glass.",
      },
    ],
    tips: "Lihat kata benda setelah 'there is/are'",
  },
  {
    rule: "Subjects with Prepositions",
    explanation: "Kata kerja harus sesuai dengan subjek utama, bukan objek dari preposisi.",
    examples: [
      {
        correct: "The box of chocolates is expensive.",
        incorrect: "The box of chocolates are expensive.",
      },
      { correct: "One of the students is absent.", incorrect: "One of the students are absent." },
      { correct: "The group of tourists was lost.", incorrect: "The group of tourists were lost." },
    ],
    tips: "Abaikan frasa preposisi, fokus pada subjek utama",
  },
  {
    rule: "Gerunds and Infinitives as Subjects",
    explanation:
      "Gerund (-ing) dan infinitive (to + verb) sebagai subjek selalu dianggap singular.",
    examples: [
      { correct: "Swimming is good exercise.", incorrect: "Swimming are good exercise." },
      { correct: "To learn English takes time.", incorrect: "To learn English take time." },
      {
        correct: "Reading books helps improve vocabulary.",
        incorrect: "Reading books help improve vocabulary.",
      },
    ],
    tips: "Gerund dan infinitive = singular",
  },
]
