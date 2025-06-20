import validateNumberInputs from "./validateNumberInputs";
export default function multiply(value1, value2) {
  if (!validateNumberInputs(value1, value2)) {
    throw new Error("Inputs must be number");
  }

  const answer = value1 * value2;

  // Number trims any trailing zero's added by toFixed
  if (!Number.isInteger(answer)) {
    return Number(answer.toFixed(10));
  }

  return answer;
}
