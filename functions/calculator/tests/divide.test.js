import calculator from "../calculator";

describe("divide function", () => {
  test("check is defined", () => {
    expect(calculator.divide).toBeDefined();
  });

  test("check is function", () => {
    expect(calculator.divide).toBeInstanceOf(Function);
  });

  test("should return solution of values divided(1)", () => {
    const inputA = 40;
    const inputB = 4;
    expect(calculator.divide(inputA, inputB)).toBe(10);
  });

  test("should return solution of values divided(2)", () => {
    const inputA = 34;
    const inputB = 2;
    expect(calculator.divide(inputA, inputB)).toBe(17);
  });

  test("should return solution when string number divided", () => {
    const inputA = "34";
    const inputB = 12;
    expect(calculator.divide(inputA, inputB)).toBe(2.8333333333);
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
      expect(() => calculator.divide(element, inputB)).toThrow(Error)
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
      expect(() => calculator.divide(inputA, element)).toThrow(Error)
    );
  });

  test("Check floating point numbers work (1)", () => {
    const inputA = 3.2232452;
    const inputB = 2.632942345;
    expect(calculator.divide(inputA, inputB)).toBe(1.2241989294);
  });

  test("Check floating point numbers work (2)", () => {
    const inputA = 6.223245234;
    const inputB = 4.632942345;
    expect(calculator.divide(inputA, inputB)).toBe(1.3432598057);
  });

  test("Check floating point numbers work (3)", () => {
    const inputA = 22.23707262;
    const inputB = 3.543;
    expect(calculator.divide(inputA, inputB)).toBe(6.27634);
  });

  test("Check 0 dealt with correctly", () => {
    const inputA = 9;
    const inputB = 0;
    expect(calculator.divide(inputA, inputB)).toBe(Infinity);
  });

  test("Should throw error if NaN inputted", () => {
    const inputA = NaN;
    const inputB = 6;
    expect(() => calculator.divide(inputA, inputB)).toThrow(Error);
  });

  test("Should return solution for large numbers (12)", () => {
    const inputA = 260518455109;
    const inputB = 12673;
    expect(calculator.divide(inputA, inputB)).toBe(20556967.97198769);
  });
});
