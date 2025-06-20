import validateNumberInputs from "./validateNumberInputs";
export default function multiply(value1, value2) {
  if (!validateNumberInputs(value1, value2)) {
    throw new Error("Inputs must be number");
  }
  return value1 * value2;
}
