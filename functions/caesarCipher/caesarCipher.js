export default function caesarCipher(text, key) {
  const textArray = text.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const cipherAlphabetObj = {};

  //Creates object of alphabet with corresponding cipher alaphabet
  alphabetArray.forEach((element, index) => {
    cipherAlphabetObj[element] = alphabetArray[(index + key) % alphabet.length];
  });

  //Creates cipher checking for uppercase
  const cipheredTextArray = textArray.map((element) => {
    //If space makes no change
    if (element === " " || element === "?" || element === "!") {
      return element;
    } else if (element.toUpperCase() === element) {
      return cipherAlphabetObj[element.toLowerCase()].toUpperCase();
    } else {
      return cipherAlphabetObj[element];
    }
  });

  //Checks for spaces(undefined) in array and adds string space
  const cipheredText = cipheredTextArray.map((el) => {
    if (el === undefined) {
      return " ";
    } else {
      return el;
    }
  });

  return cipheredText.join("");
}
