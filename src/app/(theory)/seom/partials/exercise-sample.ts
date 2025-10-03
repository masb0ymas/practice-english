import { Exercise } from "~/types/exercise"

export const exercises: Exercise[] = [
  {
    id: 1,
    question: "The group of students _____ studying for the exam.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    explanation: "Subjek utama adalah 'group' (singular), bukan 'students'. Jadi gunakan 'is'.",
  },
  {
    id: 2,
    question: "Either my brother or my sisters _____ going to help.",
    options: ["is", "are", "was", "were"],
    correct: 1,
    explanation:
      "Dengan 'either...or', kata kerja mengikuti subjek terdekat. 'Sisters' (plural) terdekat dengan kata kerja, jadi gunakan 'are'.",
  },
  {
    id: 3,
    question: "Everyone in the class _____ their homework.",
    options: ["has finished", "have finished", "finish", "finishes"],
    correct: 0,
    explanation:
      "'Everyone' adalah indefinite pronoun yang selalu singular, jadi gunakan 'has finished'.",
  },
  {
    id: 4,
    question: "There _____ many books on the shelf.",
    options: ["is", "are", "was", "were"],
    correct: 1,
    explanation: "'Books' adalah plural, jadi gunakan 'there are'.",
  },
  {
    id: 5,
    question: "Swimming in the ocean _____ dangerous.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    explanation: "Gerund 'swimming' sebagai subjek selalu dianggap singular, jadi gunakan 'is'.",
  },
  {
    id: 6,
    question: "The team _____ celebrating their victory.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    explanation:
      "'Team' adalah collective noun yang dianggap singular ketika bertindak sebagai satu unit.",
  },
  {
    id: 7,
    question: "Neither the teacher nor the students _____ ready.",
    options: ["is", "are", "was", "were"],
    correct: 1,
    explanation:
      "Dengan 'neither...nor', kata kerja mengikuti subjek terdekat. 'Students' (plural) terdekat, jadi gunakan 'are'.",
  },
  {
    id: 8,
    question: "One of my friends _____ a doctor.",
    options: ["is", "are", "was", "were"],
    correct: 0,
    explanation: "Subjek utama adalah 'one' (singular), bukan 'friends'. Jadi gunakan 'is'.",
  },
]
