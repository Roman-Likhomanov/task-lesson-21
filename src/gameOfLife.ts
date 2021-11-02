import { renderField } from "./renderField";
import { getNextGeneration } from "./getNextGeneration";
import { isAnyoneAlive } from "./isAnyoneAlive";

const initialField = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
];

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

  startButton.addEventListener("click", (event) => {
    const target = event.target as HTMLTextAreaElement;
    const buttonText = target.innerHTML;
    if (buttonText === "Stop") {
      target.innerHTML = "Start";
      clearInterval(stepInterval);
    } else {
      target.innerHTML = "Stop";
      field = getNextGeneration(field);
      renderField(gameField, field, handleUserClick);
      stepInterval = window.setInterval(() => {
        field = getNextGeneration(field);
        renderField(gameField, field, handleUserClick);
      }, step);
    }
  });

  resetButton.addEventListener("click", () => {
    field = initialField.map((el) => [...el]);
    renderField(gameField, field, handleUserClick);
  });

  function autoStop() {
    if (!isAnyoneAlive(field)) {
      clearInterval(stepInterval);
      startButton.innerHTML = "Start";
    }
  }
  autoStop();
}
