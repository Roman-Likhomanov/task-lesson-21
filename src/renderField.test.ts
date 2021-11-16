import { renderField } from "./renderField";

describe("renderField", () => {
  it("render field with correct number of cells", () => {
    const container = document.createElement("div");
    const field = [
      [true, false, true],
      [false, true, true],
      [false, false, true],
    ];
    const cb = jest.fn();
    renderField(container, field, cb);
    expect(container.querySelectorAll(".cell").length).toBe(
      field.length * field[0].length
    );
  });

  it("render field with correct values of cells", () => {
    const container = document.createElement("div");
    const field = [
      [true, false, true],
      [false, true, true],
      [false, false, true],
    ];
    const cb = jest.fn();
    renderField(container, field, cb);
    expect(container.querySelectorAll(".cell.cell--alive").length).toBe(5);
    expect(container.querySelectorAll(".cell.cell--dead").length).toBe(4);
  });

  it("render callback called with correct argument", () => {
    const container = document.createElement("div");
    const field = [
      [true, false, true],
      [false, true, true],
      [false, false, true],
    ];
    const cb = jest.fn();
    renderField(container, field, cb);
    container.querySelectorAll<HTMLElement>(".cell")[0].click();
    expect(cb).toBeCalledWith(0, 0);

    container.querySelectorAll<HTMLElement>(".cell")[4].click();
    expect(cb).toBeCalledWith(1, 1);

    container.querySelectorAll<HTMLElement>(".cell")[7].click();
    expect(cb).toBeCalledWith(1, 2);
  });
});
