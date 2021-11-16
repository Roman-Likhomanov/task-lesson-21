import { renderField } from "./renderField";
import { getNextGeneration } from "./getNextGeneration";
import { isAnyoneAlive } from "./isAnyoneAlive";

const initialField: boolean[][] = Array(10)
  .fill(0)
  .map((el) => Array(10).fill(false));

export function gameOfLife(el: HTMLElement, step = 1000) {
  let stepInterval: number;

  let field = initialField.map((el) => [...el]);
  const gameField = document.createElement("div");

  function handleUserClick(x: number, y: number) {
    field[y][x] = !field[y][x];
    renderField(gameField, field, handleUserClick);
  }

  gameField.classList.add("game-field");
  renderField(gameField, field, handleUserClick);
  el.appendChild(gameField);

  const startButton = document.createElement("button");
  startButton.classList.add("game-control");
  startButton.innerHTML = "Start";
  el.appendChild(startButton);

  const resetButton = document.createElement("button");
  resetButton.classList.add("game-reset");
  resetButton.innerHTML = "Reset";
  el.appendChild(resetButton);

  const inputRange = document.createElement("input");
  inputRange.setAttribute("type", "range");
  el.appendChild(inputRange);

  inputRange.addEventListener("change", (ev) => {
    step = Number(inputRange.value) * 20;
  });

  let arr: string[] = [];

  startButton.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const buttonText = target.innerHTML;
    if (buttonText === "Stop") {
      target.innerHTML = "Start";
      clearTimeout(stepInterval);
    } else {
      target.innerHTML = "Stop";
      field = getNextGeneration(field);
      renderField(gameField, field, handleUserClick);

      stepInterval = window.setTimeout(function interval() {
        arr.push(field.toString());
        if (arr[arr.length - 1] === arr[arr.length - 3]) {
          startButton.innerHTML = "Start";
          arr = [];
          return;
        }
        field = getNextGeneration(field);
        renderField(gameField, field, handleUserClick);

        if (!isAnyoneAlive(field)) {
          startButton.innerHTML = "Start";
          return;
        }
        window.setTimeout(interval, step);
      }, step);
    }
  });

  resetButton.addEventListener("click", () => {
    field = initialField.map((el) => [...el]);
    renderField(gameField, field, handleUserClick);
  });
}
