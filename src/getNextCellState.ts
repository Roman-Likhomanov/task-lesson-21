import { getNumberOfNeighbour } from "./getNumberOfNeighbour";
import { isCellAlive } from "./isCellAlive";

export function getNextCellState(field: boolean[][], x: number, y: number) {
  const liveNeighbour = getNumberOfNeighbour(field, x, y);
  const isAlive = isCellAlive(field, x, y);

  if (
    (isAlive && (liveNeighbour === 3 || liveNeighbour === 2)) ||
    (!isAlive && liveNeighbour === 3)
  ) {
    return true;
  }
  return false;
}
