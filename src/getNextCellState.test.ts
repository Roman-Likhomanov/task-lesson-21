import { getNextCellState } from "./getNextCellState";

describe("getNextCellState", () => {
  it("returns false for dead cell in dead env", () => {
    expect(getNextCellState([[false]], 0, 0)).toBe(false);
  });

  it("returns false for the cell wich should die", () => {
    expect(
      getNextCellState(
        [
          [true, true, true],
          [true, true, true],
        ],
        1,
        0
      )
    ).toBe(false);
  });

  it("returns true for alive cell in good env", () => {
    expect(
      getNextCellState(
        [
          [true, false, false],
          [true, true, false],
        ],
        0,
        0
      )
    ).toBe(true);
  });

  it("returns true for dead cell which should alive", () => {
    expect(
      getNextCellState(
        [
          [false, false, false],
          [true, true, false],
        ],
        0,
        0
      )
    ).toBe(false);
  });

  it("returns false for dead cell in good env", () => {
    expect(
      getNextCellState(
        [
          [true, false, true],
          [false, true, false],
        ],
        1,
        0
      )
    ).toBe(true);
  });

  it("returns correct state for blinker", () => {
    const field = [
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, true, false, false],
    ];
    const newField = field.map((row, y) =>
      row.map((cell, x) => getNextCellState(field, x, y))
    );
    expect(newField).toEqual([
      [false, false, false, false, false],
      [false, true, true, true, false],
      [false, false, false, false, false],
    ]);
  });
});
