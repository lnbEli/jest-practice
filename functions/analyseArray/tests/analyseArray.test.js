import analyseArray from "../analyseArray";

describe("analyseArray function", () => {
  test("check is defined", () => {
    expect(analyseArray).toBeDefined();
  });

  test("check is function", () => {
    expect(analyseArray).toBeInstanceOf(Function);
  });

  test("test function only accepts array", () => {
    const input = [
      BigInt("1234567890123435889012345678"),
      Symbol("help"),
      true,
      "hello",
      "fifty",
      12,
      {},
      undefined,
      null,
      NaN,
    ];

    input.forEach((element) =>
      expect(() => analyseArray(element)).toThrow(Error)
    );
  });

  test("test function returns object", () => {
    const input = [1];
    const result = analyseArray(input);
    expect(typeof result).toBe("object");
  });

  test("test function returns object with average of numbers in array (1)", () => {
    const input = [3, 5, 8, 8];
    expect(analyseArray(input)).toEqual(
      expect.objectContaining({ average: 6 })
    );
  });

  test("test function returns object with average of numbers in array (2)", () => {
    const input = [24, 19, 80, 8];
    expect(analyseArray(input)).toEqual(
      expect.objectContaining({ average: 32.75 })
    );
  });

  test("test function returns object with keys of average, min, max, length ", () => {
    const input = [2, 3, 1, 6];
    expect(analyseArray(input)).toEqual(
      expect.objectContaining({
        average: 3,
        min: 1,
        max: null,
        length: null,
      })
    );
  });

  test("test function returns object with average and min value ", () => {
    const input = [23, 34, 1, 6];
    expect(analyseArray(input)).toEqual(
      expect.objectContaining({
        average: 16,
        min: 1,
        max: null,
        length: null,
      })
    );
  });

  test("test function returns object with average and min value(2)", () => {
    const input = [33, 14, 4, 65];
    expect(analyseArray(input)).toEqual(
      expect.objectContaining({
        average: 29,
        min: 4,
        max: null,
        length: null,
      })
    );
  });
});
