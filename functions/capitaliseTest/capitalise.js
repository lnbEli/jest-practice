export default function capitalise(string) {
  if (typeof string !== "string") {
    throw new TypeError("Input must be string");
  }
  const trimmedString = string.trim();
  const capitalisedString =
    trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);

  return capitalisedString;
}
