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

  test("should throw error if non-numeric string inputed (InputB)", () => {
    const inputA = 21;
    const inputB = [
      BigInt("123456789012343588901234567890"),
      Symbol("help"),
      true,
      "hello",
      "fifty",
      [],
      {},
    ];

    inputB.forEach((element) =>
      expect(() => calculator.multiply(inputA, element)).toThrow(Error)
    );
  });

  test("Check floating point numbers work (1)", () => {
    const inputA = 3.2232452;
    const inputB = 2.632942345;
    expect(calculator.multiply(inputA, inputB)).toBe(8.4866187754);
  });

  test("Check floating point numbers work (2)", () => {
    const inputA = 6.223245234;
    const inputB = 4.632942345;
    expect(calculator.multiply(inputA, inputB)).toBe(28.8319363679);
  });

  test("Check floating point numbers work (3)", () => {
    const inputA = 5.5551;
    const inputB = 3.4;
    expect(calculator.multiply(inputA, inputB)).toBe(18.88734);
  });

  test("Check 0 dealt with correctly", () => {
    const inputA = 0;
    const inputB = 9;
    expect(calculator.multiply(inputA, inputB)).toBe(0);
  });

  test("Should throw error if NaN inputted", () => {
    const inputA = NaN;
    const inputB = 6;
    expect(() => calculator.multiply(inputA, inputB)).toThrow(Error);
  });

  test("Should return solution for large numbers (12 digits)", () => {
    const inputA = 260518455109;
    const inputB = 126734891289;
    expect(calculator.multiply(inputA, inputB)).toBe(3.301677808701734e22);
  });
});
