import caesarCipher from "../caesarCipher";

describe("caesarCipher function", () => {
  test("check is defined", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("check is function", () => {
    expect(caesarCipher).toBeInstanceOf(Function);
  });

  test("test function returns shifted phrase (1)", () => {
    const shiftFactor = 3;
    const input = "dog";
    expect(caesarCipher(input, shiftFactor)).toBe("grj");
  });

  test("test function returns shifted phrase (2)", () => {
    const shiftFactor = 20;
    const input = "peter";
    expect(caesarCipher(input, shiftFactor)).toBe("jynyl");
  });

  test("test function returns shifted phrase including spaces", () => {
    const shiftFactor = 45;
    const input = "beware the mysterious men";
    expect(caesarCipher(input, shiftFactor)).toBe("uxptkx max frlmxkbhnl fxg");
  });

  test("test function case/space preservation (1)", () => {
    const shiftFactor = 5;
    const input = "Sweet Dude";
    expect(caesarCipher(input, shiftFactor)).toBe("Xbjjy Izij");
  });

  test("test function case/space preservation (2)", () => {
    const shiftFactor = 8;
    const input = "I have Always wanted to visit Iceland";
    expect(caesarCipher(input, shiftFactor)).toBe(
      "Q pidm Iteiga eivbml bw dqaqb Qkmtivl"
    );
  });

  test("test function punctuation preservation", () => {
    const shiftFactor = 54;
    const input = "What is happening here? You should be ashamed of yourself!";
    expect(caesarCipher(input, shiftFactor)).toBe(
      "Yjcv ku jcrrgpkpi jgtg? Aqw ujqwnf dg cujcogf qh aqwtugnh!"
    );
  });
});
