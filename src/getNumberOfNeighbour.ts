import { isCellAlive } from "./isCellAlive";
export function getNumberOfNeighbour(
  field: boolean[][],
  x: number,
  y: number
): number {
  let num = 0;

  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (i === y && j === x) {
        continue;
      }
      num = num + Number(isCellAlive(field, j, i));
    }
  }
  return num;
}
