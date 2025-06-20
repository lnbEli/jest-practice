import calculator from "../calculator";

describe("subtract function", () => {
  test("check is defined", () => {
    expect(calculator.subtract).toBeDefined();
  });

  test("check is function", () => {
    expect(calculator.subtract).toBeInstanceOf(Function);
  });

  test("should return solution of values subtracted(1)", () => {
    const inputA = 4;
    const inputB = 6;
    expect(calculator.subtract(inputA, inputB)).toBe(-2);
  });

  test("should return solution of values subtracted(2)", () => {
    const inputA = 34;
    const inputB = 2;
    expect(calculator.subtract(inputA, inputB)).toBe(32);
  });
  test("should return solution when string number subtracted", () => {
    const inputA = "34";
    const inputB = 12;
    expect(calculator.subtract(inputA, inputB)).toBe(22);
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
      expect(() => calculator.subtract(element, inputB)).toThrow(Error)
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
      expect(() => calculator.subtract(inputA, element)).toThrow(Error)
    );
  });

  test("Check floating point numbers work (1)", () => {
    const inputA = 3.2232452;
    const inputB = 2.632942345;
    expect(calculator.subtract(inputA, inputB)).toBe(0.590302855);
  });

  test("Check floating point numbers work (2)", () => {
    const inputA = 6.223245234;
    const inputB = 4.632942345;
    expect(calculator.subtract(inputA, inputB)).toBe(1.590302889);
  });

  test("Check floating point numbers work (3)", () => {
    const inputA = 5.55555555;
    const inputB = 3.45655555;
    expect(calculator.subtract(inputA, inputB)).toBe(2.099);
  });

  test("Check 0 dealt with correctly", () => {
    const inputA = 0;
    const inputB = 9;
    expect(calculator.subtract(inputA, inputB)).toBe(-9);
  });

  test("Should throw error if NaN inputted", () => {
    const inputA = NaN;
    const inputB = 6;
    expect(() => calculator.subtract(inputA, inputB)).toThrow(Error);
  });

  test("Should return solution for large numbers (12 digits)", () => {
    const inputA = 260518455109;
    const inputB = 126734891289;
    expect(calculator.subtract(inputA, inputB)).toBe(133783563820);
  });
});
