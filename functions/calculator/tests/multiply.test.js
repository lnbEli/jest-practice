import calculator from "../calculator";

describe("mulitply function", () => {
  test("check is defined", () => {
    expect(calculator.multiply).toBeDefined();
  });

  test("check is function", () => {
    expect(calculator.multiply).toBeInstanceOf(Function);
  });

  test("should return solution of values multiplied(1)", () => {
    const inputA = 4;
    const inputB = 6;
    expect(calculator.multiply(inputA, inputB)).toBe(24);
  });

  test("should return solution of values multiplied(2)", () => {
    const inputA = 34;
    const inputB = 2;
    expect(calculator.multiply(inputA, inputB)).toBe(68);
  });

  test("should return solution when string number multiplied", () => {
    const inputA = "34";
    const inputB = 12;
    expect(calculator.multiply(inputA, inputB)).toBe(408);
  });

  test("should throw error if non-numeric string inputed (InputA)", () => {
    const inputA = [
      BigInt("123456789012343588901234567890"),
      Symbol("help"),
      true,
      "hello",
      "fifty",
      [],
      {},
    ];
    const inputB = 2;

    inputA.forEach((element) =>
      expect(() => calculator.multiply(element, inputB)).toThrow(Error)
    );
  });
});
