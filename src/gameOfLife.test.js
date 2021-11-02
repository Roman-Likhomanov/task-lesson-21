import { gameOfLife } from "./gameOfLife";
import { renderField } from "./renderField";
import { getNextGeneration } from "./getNextGeneration";

jest.mock("./renderField", () => ({
  renderField: jest.fn(),
}));

jest.mock("./getNextGeneration", () => ({
  getNextGeneration: jest.fn(),
}));

const sleep = (x) => new Promise((resolve) => setTimeout(resolve, x));

describe("gameOfLife", () => {
  const step = 100;
  let el;
  let rendEl;
  let rendField;
  let rendCb;
  beforeEach(() => {
    el = document.createElement("div");
    renderField.mockImplementation((el, field, cb) => {
      rendEl = el;
      rendField = field;
      rendCb = cb;
    });
  });
  afterEach(() => {
    renderField.mockReset();
    getNextGeneration.mockReset();
  });
  it("renders initial markup", () => {
    gameOfLife(el);
    expect(renderField).toHaveBeenCalled();
    expect(rendEl).toBeDefined();
    expect(rendField).toBeInstanceOf(Array);
    expect(rendField.length).toBe(10);
    expect(rendField[0].length).toBe(10);
    expect(rendCb).toBeInstanceOf(Function);

    expect(el.querySelector(".game-control").innerHTML).toBe("Start");
    expect(el.querySelector(".game-reset").innerHTML).toBe("Reset");
  });

  it("renders update field after cell click", () => {
    gameOfLife(el);

    expect(renderField).toHaveBeenCalledTimes(1);
    expect(rendField[2][1]).toBe(false);

    rendCb(1, 2);
    expect(renderField).toHaveBeenCalledTimes(2);
    expect(rendField[2][1]).toBe(true);
  });

  it("renders clear field after reset", () => {
    gameOfLife(el);

    rendCb(1, 2);
    rendCb(2, 2);
    rendCb(4, 0);
    renderField.mockClear();
    el.querySelector(".game-reset").click();
    expect(renderField).toHaveBeenCalledTimes(1);
    expect(
      rendField.every((row) => row.every((cell) => cell === false))
    ).toBeTruthy();
  });

  it("controls game with Start/Stop", async () => {
    gameOfLife(el, step);
    expect(renderField).toHaveBeenCalledTimes(1);
    expect(getNextGeneration).toHaveBeenCalledTimes(0);
    el.querySelector(".game-control").click();
    expect(el.querySelector(".game-control").innerHTML).toBe("Stop");
    expect(getNextGeneration).toHaveBeenCalledTimes(1);
    expect(renderField).toHaveBeenCalledTimes(2);

    await sleep(step);
    expect(getNextGeneration).toHaveBeenCalledTimes(2);
    expect(renderField).toHaveBeenCalledTimes(3);
    await sleep(step);
    expect(getNextGeneration).toHaveBeenCalledTimes(3);
    expect(renderField).toHaveBeenCalledTimes(4);
    await sleep(step);
    expect(getNextGeneration).toHaveBeenCalledTimes(4);
    expect(renderField).toHaveBeenCalledTimes(5);
    await sleep(step);
    expect(getNextGeneration).toHaveBeenCalledTimes(5);
    expect(renderField).toHaveBeenCalledTimes(6);

    el.querySelector(".game-control").click();
    expect(el.querySelector(".game-control").innerHTML).toBe("Start");
    await sleep(step * 10);
    expect(getNextGeneration).toHaveBeenCalledTimes(5);
    expect(renderField).toHaveBeenCalledTimes(6);
  });
});
