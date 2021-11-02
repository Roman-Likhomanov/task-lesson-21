import { getNextCellState } from "./getNextCellState";

export function getNextGeneration(field:boolean[][]) {
    return field.map((row, y) =>
    row.map((cell, x) => getNextCellState(field, x, y))
    );
}