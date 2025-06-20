import validateNumberInputs from "./validateNumberInputs";
export default function add(value1, value2) {
  if (!validateNumberInputs(value1, value2)) {
    throw new Error("Inputs must be number");
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
