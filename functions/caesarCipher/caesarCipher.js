export default function caesarCipher(text, key) {
  const textArray = text.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const cipherAlphabetObj = {};

  // Populate the cipherAlphabetObj with shifted letters
  alphabetArray.forEach((element, index) => {
    // Map lowercase letters
    cipherAlphabetObj[element] = alphabetArray[(index + key) % alphabet.length];
    // Map uppercase letters
    cipherAlphabetObj[element.toUpperCase()] =
      alphabetArray[(index + key) % alphabet.length].toUpperCase();
  });

  // Create the ciphered text by mapping each character in the original text
  const cipheredTextArray = textArray.map((element) => {
    //If space makes no change
    if (!/[a-zA-Z]/.test(element)) {
      return element;
    } else {
      return cipherAlphabetObj[element];
    }
  });

  return cipheredTextArray.join("");
}
