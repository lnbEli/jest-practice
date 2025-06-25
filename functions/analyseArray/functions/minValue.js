export default function (array) {
  return array.reduce((min, current) => {
    return min <= current ? min : current;
  }, array[0]);
}
