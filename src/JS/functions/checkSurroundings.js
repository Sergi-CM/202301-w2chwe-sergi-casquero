import {
  board,
  boardRows,
  boardColumns,
} from "../globalVariables/globalVariables.js";

const checkSurroundings = (cell) => {
  const cellXCoord = cell.xCoordinate;
  const cellYCoord = cell.yCoordinate;

  const topBoundary = cellYCoord === 0 ? 0 : -1;
  const rightBoundary = cellXCoord === boardColumns ? 0 : 1;
  const bottomBoundary = cellYCoord === boardRows ? 0 : 1;
  const leftBoundary = cellXCoord === 0 ? 0 : -1;

  let aliveNeighbours = 0;

  for (
    let row = cellYCoord + topBoundary;
    row < cellYCoord + bottomBoundary;
    row++
  ) {
    for (
      let column = cellXCoord + leftBoundary;
      column < cellXCoord + rightBoundary;
      column++
    ) {
      if (board[row][column].isAlive) {
        aliveNeighbours++;
      }
    }
  }

  if (cell.isAlive) {
    aliveNeighbours--;
  }

  return aliveNeighbours;
};

export default checkSurroundings;
