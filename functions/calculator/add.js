export default function add(value1, value2) {
  //Checks if anything other than a number or number string is entered error thrown

  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error("Inputs must be number");
  }
  return Number(value1) + Number(value2);
}
