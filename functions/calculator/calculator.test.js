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
});
