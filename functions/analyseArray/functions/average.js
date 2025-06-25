export default function average(array) {
  return (
    array.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0) / array.length
  );
}
