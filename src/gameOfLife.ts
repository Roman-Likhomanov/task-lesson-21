import { renderField } from "./renderField";
import { getNextGeneration } from "./getNextGeneration";
import { isAnyoneAlive } from "./isAnyoneAlive";

let initialField = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
];

export function gameOfLife(el:HTMLElement, step = 1000) {
    let stepInterval:any;
    let field = initialField.map((el) => [...el]);
   
    function handleUserClick(x:number, y:number) {
        field[y][x] = !field[y][x];
        renderField(gameField, field, handleUserClick);
    }

    let gameField = document.createElement("div");
    gameField.classList.add("game-field");
    renderField(gameField, field, handleUserClick);
    el.appendChild(gameField);

    let startButton = document.createElement("button");
    startButton.classList.add("game-control");
    startButton.innerHTML = "Start";
    el.appendChild(startButton);

    let resetButton = document.createElement("button");
    resetButton.classList.add("game-reset");
    resetButton.innerHTML = "Reset";
    el.appendChild(resetButton);

    startButton.addEventListener('click', (event) => {
        const target = event.target as HTMLTextAreaElement;
        let buttonText = target.innerHTML;
        if (buttonText === "Stop") {
            target.innerHTML = 'Start';
            clearInterval(stepInterval);
        } else {
            target.innerHTML = 'Stop';
            field = getNextGeneration(field);
            renderField(gameField, field, handleUserClick);
            stepInterval = setInterval(() => {
                field = getNextGeneration(field);
                renderField(gameField, field, handleUserClick);   
            }, step);
        }
    });

    resetButton.addEventListener("click", () => {
        field = initialField.map((el) => [...el]);
        renderField(gameField, field, handleUserClick);   
    })

    if (!isAnyoneAlive(field)) {
        clearInterval(stepInterval);
      }
}