import { getNumberOfNeighbour } from "./getNumberOfNeighbour";

describe("getNumberOfNeighbour", () => {
  it("returns 0 for dead space", () => {
    expect(getNumberOfNeighbour([], 0, 0)).toBe(0);
    expect(
      getNumberOfNeighbour(
        [
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ],
        1,
        1
      )
    ).toBe(0);
  });

  it("returns 1 or 0 for field", () => {
    const field = [
      [true, false, false],
      [false, false, false],
      [false, false, false],
    ];

    const result = field.map((row, y) =>
      row.map((cell, x) => getNumberOfNeighbour(field, x, y))
    );
    expect(result).toEqual([
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]);
  });
});
