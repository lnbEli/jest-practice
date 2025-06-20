import calculator from "../calculator";

describe("calculator function", () => {
  test("check is defined", () => {
    expect(calculator).toBeDefined();
  });

  test("check is object", () => {
    expect(calculator).toBeInstanceOf(Object);
  });
});
