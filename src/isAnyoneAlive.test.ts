import { isAnyoneAlive } from "./isAnyoneAlive";

describe("isAnyoneAlive", () => {
  it("is a function", () => {
    expect(typeof isAnyoneAlive).toBe("function");
  });

  it("returns `false` for empty field", () => {
    expect(isAnyoneAlive([])).toBe(false);
    expect(isAnyoneAlive([[]])).toBe(false);
  });

  it("returns `true` for field 1x1 from true", () => {
    expect(isAnyoneAlive([[true]])).toBe(true);
  });
  [
    { field: [], expectedResult: false },
    { field: [[]], expectedResult: false },
    { field: [[true]], expectedResult: true },
    { field: [[true], [false]], expectedResult: true },
    { field: [[false], [false]], expectedResult: false },
    {
      field: [
        [false, false, false],
        [false, false, true],
      ],
      expectedResult: true,
    },
  ].forEach((el) => {
    it(`should return ${el.expectedResult} for ${JSON.stringify(
      el.field
    )}`, () => {
      expect(isAnyoneAlive(el.field)).toBe(el.expectedResult);
    });
  });
});
