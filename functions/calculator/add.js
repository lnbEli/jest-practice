export default function add(value1, value2) {
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
  //Allows string numbers to be added
  const answer = Number(value1) + Number(value2);

  // Number trims any trailing zero's added by toFixed
  // 10 is max decimal places
  if (!Number.isInteger(answer)) {
    return Number(answer.toFixed(10));
  }

  return answer;
}
