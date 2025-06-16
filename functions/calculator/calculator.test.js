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
  test("should return solution even if string number added", () => {
    const inputA = "34";
    const inputB = "12";
    expect(calculator.add(inputA, inputB)).toBe(46);
  });

  test("should throw error if non-numeric string inputed (1)", () => {
    const inputA = "ten";
    const inputB = "12";
    expect(() => calculator.add(inputA, inputB)).toThrow(Error);
  });

  test("should throw error if non-numeric string inputed (2)", () => {
    const inputA = "hello";
    const inputB = "fifty";
    expect(() => calculator.add(inputA, inputB)).toThrow(Error);
  });

  test("should throw error if non-numeric string inputed (3)", () => {
    const inputA = {};
    const inputB = 2;
    expect(() => calculator.add(inputA, inputB)).toThrow(Error);
  });
});
