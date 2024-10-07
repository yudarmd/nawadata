const readlineSync = require("readline-sync");

function procVowel(s, vowels) {
  let vowelList = [];

  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelList.push(char);
      }
    }
  }

  vowelList = vowelList.join("");

  return vowelList;
}

function procConsonant(s, vowels) {
  let consonantList = [];

  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (/[a-z]/.test(char)) {
      if (!vowels.includes(char)) {
        consonantList.push(char);
      }
    }
  }

  consonantList = consonantList.join("");

  return consonantList;
}

const s = readlineSync.question("Input one line of words (S) : ");
const vowels = "aeiou";

console.log("Vowel Characters : \n" + procVowel(s, vowels));
console.log("Consonant Characters : \n" + procConsonant(s, vowels));
