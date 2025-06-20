import calculator from "../calculator";

describe("add function", () => {
  test("check is defined", () => {
    expect(calculator.add).toBeDefined();
  });

  test("check is function", () => {
    expect(calculator.add).toBeInstanceOf(Function);
  });

  test("should return solution of two values added(1)", () => {
    const inputA = 4;
    const inputB = 6;
    expect(calculator.add(inputA, inputB)).toBe(10);
  });

  test("should return solution of two values added(2)", () => {
    const inputA = 34;
    const inputB = 2;
    expect(calculator.add(inputA, inputB)).toBe(36);
  });
  test("should return solution when string number added", () => {
    const inputA = "34";
    const inputB = 12;
    expect(calculator.add(inputA, inputB)).toBe(46);
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
      expect(() => calculator.add(element, inputB)).toThrow(Error)
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
      expect(() => calculator.add(inputA, element)).toThrow(Error)
    );
  });

  test("Check floating point numbers work", () => {
    const inputA = 4.632942345;
    const inputB = 6.223245234;
    expect(calculator.add(inputA, inputB)).toBe(10.856187579);
  });

  test("Check floating point numbers work (2)", () => {
    const inputA = 5.5555555;
    const inputB = 3.4554445;
    expect(calculator.add(inputA, inputB)).toBe(9.011);
  });

  test("Check floating point numbers work (3)", () => {
    const inputA = 4.553465555523;
    const inputB = 5.457894423243;
    expect(calculator.add(inputA, inputB)).toBe(10.0113599788);
  });

  test("Check 0 dealt with correctly", () => {
    const inputA = 0;
    const inputB = 9;
    expect(calculator.add(inputA, inputB)).toBe(9);
  });

  test("Should throw error if NaN inputted", () => {
    const inputA = NaN;
    const inputB = 6;
    expect(() => calculator.add(inputA, inputB)).toThrow(Error);
  });

  test("Should return solution for large numbers (12 digits)", () => {
    const inputA = 126734891289;
    const inputB = 260518455109;
    expect(calculator.add(inputA, inputB)).toBe(387253346398);
  });
});
