import wordBank from "./wordle-bank.txt";
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// Predefined winning words with hints
const predefinedWinningWords = [
  {
    word: "MAJNU",
    hint: "Named after a famous lover, a place where two lovers met.",
  },
  {
    word: "LOHRI",
    hint: "A festival that is your favourite but now, mine too.",
  },
  { word: "TEETH", hint: "Ek challa ae, ek nahi challaa ae" },
  { word: "VIDEO", hint: "Hiiii Akshiiii" },
  { word: "SHIVU", hint: "Who's the cutest niece of them all?" },
  { word: "NINNI", hint: "A forever coming phenomenon." },
  { word: "PIZZA", hint: "What's it gonna be, Leo's or Jamie Olliver's?" },
  { word: "GARBA", hint: "Bad experience yet a good memory." },
  { word: "CAMPA", hint: "A drink we love, called a word I adopted from you." },
  { word: "AUJLA", hint: "Kadde mil ke baitho, gal kariye pyaar di." },
  { word: "TACOS", hint: "You like it hard and I like it soft ;)" },
  { word: "REELS", hint: "Our favourite thing to do after a long long day." },
];

// Word bank text file import

export const generateWordSet = async () => {
  let wordSet = new Set();
  let todaysWord;
  let hint;

  // Load word bank
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result
        .split("\n")
        .map((word) => word.trim().toUpperCase());
      wordSet = new Set(wordArr);
    });

  // Add predefined winning words to the word set
  predefinedWinningWords.forEach((item) => wordSet.add(item.word));

  // Choose a random winning word from the predefined list
  const todaysWordObject =
    predefinedWinningWords[
      Math.floor(Math.random() * predefinedWinningWords.length)
    ];
  todaysWord = todaysWordObject.word;
  hint = todaysWordObject.hint;

  return { wordSet, todaysWord, hint };
};
