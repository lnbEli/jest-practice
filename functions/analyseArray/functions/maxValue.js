export default function (array) {
  return array.reduce((max, current) => {
    return current > max ? current : max;
  }, array[0]);
}
