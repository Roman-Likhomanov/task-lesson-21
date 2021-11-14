import { gameOfLife } from "./gameOfLife";
import { renderField } from "./renderField";
import { getNextGeneration } from "./getNextGeneration";
import { isAnyoneAlive } from "./isAnyoneAlive";

jest.mock("./renderField", () => ({
  renderField: jest.fn(),
}));

// jest.mock("./getNextGeneration", () => ({
//   getNextGeneration: jest.fn(),
// }));

jest.mock("./isAnyoneAlive", () => ({
  isAnyoneAlive: jest.fn(),
}));

const sleep = (x: number) => new Promise((resolve) => setTimeout(resolve, x));

describe("gameOfLife", () => {
  const step = 100;
  let el: HTMLElement;
  let rendEl: HTMLElement;
  let rendField: boolean[][];
  let rendCb: (...args: number[]) => void;
  beforeEach(() => {
    el = document.createElement("div");
    (renderField as jest.Mock).mockImplementation((el, field, cb) => {
      rendEl = el;
      rendField = field;
      rendCb = cb;
    });
  });
  afterEach(() => {
    (renderField as jest.Mock).mockReset();
    // (getNextGeneration as jest.Mock).mockReset();
  });
  it("renders initial markup", () => {
    gameOfLife(el);
    expect(renderField).toHaveBeenCalled();
    expect(rendEl).toBeDefined();
    expect(rendField).toBeInstanceOf(Array);
    expect(rendField.length).toBe(10);
    expect(rendField[0].length).toBe(10);
    expect(rendCb).toBeInstanceOf(Function);
    
    let control = el.querySelector(".game-control") as HTMLElement;
    expect(control.innerHTML).toBe("Start");
    let reset = el.querySelector(".game-reset") as HTMLElement;
    expect (reset.innerHTML).toBe("Reset");
    let inputRange = el.querySelector('[type="range"]') as HTMLElement;
    expect(inputRange).toBe;
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
    (renderField as jest.Mock).mockClear();
    let reset = el.querySelector(".game-reset") as HTMLElement;
    reset.click();
    expect(renderField).toHaveBeenCalledTimes(1);
    expect(
      rendField.every((row) => row.every((cell) => cell === false))
    ).toBeTruthy();
  });

  // it("changing the step when changing the range", () => {
  //   gameOfLife(el);
  //   let step;
  //   let inputRange = el.querySelector('[type="range"]') as HTMLElement;
  //   inputRange.onchange;
  //   inputRange.value = 100;
  //   expect(step).toBe(2000);
  // });

  it("controls game with Start/Stop", async () => {
    let arr:string[] = [];
  
    gameOfLife(el, step);
    rendCb(1, 0);
    rendCb(1, 1);
    rendCb(1, 2);
    (renderField as jest.Mock).mockClear();
    let control = el.querySelector(".game-control") as HTMLElement;
    control.click();
    expect(control.innerHTML).toBe("Stop");
    // expect(getNextGeneration).toHaveBeenCalledTimes(1);
    expect(renderField).toHaveBeenCalledTimes(1);
    
    await sleep(step);
    expect(arr).toBe(['false, false, false, false, false, false,false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false']);
    // expect(getNextGeneration).toHaveBeenCalledTimes(2);
    expect(renderField).toHaveBeenCalledTimes(2);
    expect(rendField[0][1]).toBe(true);
    expect(rendField[1][1]).toBe(true);
    expect(rendField[2][1]).toBe(true);
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

    // let isAnyone = isAnyoneAlive(rendField);
    // expect(isAnyone).toBe(false);
    // await sleep(step * 10);
    // expect(getNextGeneration).toHaveBeenCalledTimes(5);
    // expect(renderField).toHaveBeenCalledTimes(6);

    control.click();
    expect(control.innerHTML).toBe("Start");
    await sleep(step * 10);
    expect(getNextGeneration).toHaveBeenCalledTimes(5);
    expect(renderField).toHaveBeenCalledTimes(6);
  });
});
