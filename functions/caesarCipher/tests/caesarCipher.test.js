import caesarCipher from "../caesarCipher";

describe("caesarCipher function", () => {
  test("check is defined", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("check is function", () => {
    expect(caesarCipher).toBeInstanceOf(Function);
  });
});
