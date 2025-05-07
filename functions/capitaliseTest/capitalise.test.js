import capitalise from "./capitalise";

describe("capitalise function", () => {
  test("checks function defined", () => {
    expect(capitalise).toBeDefined();
  });

  test("check is function", () => {
    expect(capitalise).toBeInstanceOf(Function);
  });

  test("should take 1st input example and capitalise first letter", () => {
    const input = "apple";
    const actual = capitalise(input);
    const expected = "Apple";
    expect(actual).toBe(expected);
  });

  test("should take 2nd input example and capitalise first letter", () => {
    const input = "pizza";
    const actual = capitalise(input);
    const expected = "Pizza";
    expect(actual).toBe(expected);
  });

  test("should take 3nd input example and capitalise first letter", () => {
    const input = "dog";
    const actual = capitalise(input);
    const expected = "Dog";
    expect(actual).toBe(expected);
  });

  test("reject if input is not string", () => {
    const inputs = [123, [], {}, function () {}, null, undefined, true, false];

    inputs.forEach((input) => {
      expect(() => capitalise(input)).toThrow(TypeError);
    });
  });

  test("accept single letter", () => {
    const input = "a";
    expect(capitalise(input)).toBe("A");
  });

  test("remove any space at beginning or end of string", () => {
    const input = " help";
    expect(capitalise(input)).toBe("Help");
  });

  test("accepts numbers within strings", () => {
    const input = "8te";
    expect(capitalise(input)).toBe(input);
  });

  test("accepts blank string", () => {
    const input = "";
    expect(capitalise(input)).toBe(input);
  });

  test("preserves internal spaces", () => {
    const input = "wo nder   ful";
    expect(capitalise(input)).toBe("Wo nder   ful");
  });

  test("accepts string of only multiple blank spaces", () => {
    const input = "           ";
    expect(capitalise(input)).toBe("");
  });
});
