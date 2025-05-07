export default function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("input must be string");
  }

  const strArrReversed = Array.from(str).reverse();
  const reversedStr = strArrReversed.join("");

  return reversedStr;
}
