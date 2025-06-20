export default function validateNumberInputs(value1, value2) {
  // Disallow objects, arrays, null, booleans, BigInt
  if (
    typeof value1 === "object" ||
    typeof value2 === "object" ||
    typeof value1 === "boolean" ||
    typeof value2 === "boolean" ||
    typeof value1 === "bigint" ||
    typeof value2 === "bigint"
  ) {
    return false;
  }
  // Check if both values can be converted to valid numbers.
  // Disallow NaN
  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    return false;
  }
  return true;
}
