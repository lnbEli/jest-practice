import reverseString from "./reversestring";

describe("reverseString function", () => {
  test("checks defined", () => {
    expect(reverseString).toBeDefined();
  });

  test("checks it is a function", () => {
    expect(reverseString).toBeInstanceOf(Function);
  });

  test("should take first input and reverse it", () => {
    const input = "sublime";
    expect(reverseString(input)).toBe("emilbus");
  });

  test("should take second input and reverse it", () => {
    const input = "peace";
    expect(reverseString(input)).toBe("ecaep");
  });

  test("should take third input and reverse it", () => {
    const input = "dog";
    expect(reverseString(input)).toBe("god");
  });

  test("should accept only strings", () => {
    const inputs = [
      7658768,
      [],
      {},
      function () {},
      true,
      false,
      null,
      undefined,
      NaN,
      Symbol("test"),
      new Date(),
      /regabc/,
    ];

    inputs.forEach((input) => {
      expect(() => {
        reverseString(input);
      }).toThrow("input must be string");
    });
  });

  test("should accept single character string", () => {
    const input = "a";
    expect(reverseString(input)).toBe("a");
  });

  test("should accept empty string", () => {
    const input = "";
    expect(reverseString(input)).toBe("");
  });

  test("should accept whitespace string", () => {
    const input = "     ";
    expect(reverseString(input)).toBe("     ");
  });

  test("should accept string padded with whitespace", () => {
    const input = " a  b   ";
    expect(reverseString(input)).toBe("   b  a ");
  });

  test("should accept long string", () => {
    const input = "de".repeat(2000);
    const expectOutput = "ed".repeat(2000);
    expect(reverseString(input)).toBe(expectOutput);
  });

  test("should accept unicode characters in string", () => {
    const input = "😊so👌";
    expect(reverseString(input)).toBe("👌os😊");
  });
});
