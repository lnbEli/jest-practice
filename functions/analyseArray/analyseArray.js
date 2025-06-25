import average from "./functions/average";
import minValue from "./functions/minValue";
export default function analyseArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Please only input an array");
  } else {
    return {
      average: average(array),
      min: minValue(array),
      max: null,
      length: null,
    };
  }
}
