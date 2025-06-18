export default function add(value1, value2) {
  //Checks if anything other than a number or number string is entered error thrown
  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error("Inputs must be numbers");
  }
  //Number method performs string conversion which gives mixed results. Added so all objects throw error no matter empty or not.
  else if (typeof value1 === "object" || typeof value2 === "object") {
    throw new Error("Inputs must be number");
    //To deal with booleans
  } else if (typeof value1 === "boolean" || typeof value2 === "boolean") {
    throw new Error("Inputs must be number");
    // To deal with BigInt
  } else if (typeof value1 === "bigint" || typeof value2 === "bigint") {
    throw new Error("Inputs must be number");
  }

  return Number(value1) + Number(value2);
}
