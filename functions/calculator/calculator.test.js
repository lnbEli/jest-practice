import calculator from "./calculator";

describe("calculator function", () => {
  test("check is defined", () => {
    expect(calculator).toBeDefined();
  });

  test("check is object", () => {
    expect(calculator).toBeInstanceOf(Object);
  });
});

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
});
