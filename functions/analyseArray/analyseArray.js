import average from "./functions/average";
import minValue from "./functions/minValue";
import maxValue from "./functions/maxValue";
import areAllNumbers from "./functions/areAllNumbers";
export default function analyseArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Please only input an array");
  } else if (array.length === 0) {
    throw new Error("Array empty");
  } else if (!areAllNumbers(array)) {
    throw new Error("All items in array must be numbers");
  } else {
    return {
      average: Number(average(array).toFixed(10)),
      min: minValue(array),
      max: maxValue(array),
      length: array.length,
    };
  }
}
