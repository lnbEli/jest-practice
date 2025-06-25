import average from "./functions/average";
import minValue from "./functions/minValue";
import maxValue from "./functions/maxValue";
export default function analyseArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Please only input an array");
  } else {
    return {
      average: Number(average(array).toFixed(10)),
      min: minValue(array),
      max: maxValue(array),
      length: array.length,
    };
  }
}
