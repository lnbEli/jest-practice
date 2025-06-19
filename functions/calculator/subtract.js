export default function subtract(value1, value2) {
  // Disallow objects, arrays, null, booleans, BigInt
  if (
    typeof value1 === "object" ||
    typeof value2 === "object" ||
    typeof value1 === "boolean" ||
    typeof value2 === "boolean" ||
    typeof value1 === "bigint" ||
    typeof value2 === "bigint"
  ) {
    throw new Error("Inputs must be number");
  }
  // Check if both values can be converted to valid numbers
  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error("Inputs must be numbers");
  }
  const answer = Number(value1) - Number(value2);

  //const

  if (!Number.isInteger(answer)) {
    return Number(answer.toFixed(9));
  }

  return answer;
}
