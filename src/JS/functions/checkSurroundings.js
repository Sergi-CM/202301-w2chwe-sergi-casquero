import {
  board,
  boardRows,
  boardColumns,
} from "../globalVariables/globalVariables.js";

const checkSurroundings = (cell) => {
  const cellXCoord = cell.xCoordinate;
  const cellYCoord = cell.yCoordinate;

  const topBoundary = cellYCoord === 0 ? 0 : -1;
  const rightBoundary = cellXCoord === boardColumns - 1 ? 0 : 1;
  const bottomBoundary = cellYCoord === boardRows - 1 ? 0 : 1;
  const leftBoundary = cellXCoord === 0 ? 0 : -1;

  let aliveNeighbours = 0;

  for (
    let column = cellYCoord + topBoundary;
    column <= cellYCoord + bottomBoundary;
    column++
  ) {
    for (
      let row = cellXCoord + leftBoundary;
      row <= cellXCoord + rightBoundary;
      row++
    ) {
      if (board[column][row].isAlive) {
        aliveNeighbours++;
      }
    }
  }

  if (cell.isAlive) {
    aliveNeighbours--;
  }

  console.log(aliveNeighbours);

  return aliveNeighbours === 3 || (cell.isAlive && aliveNeighbours === 2);
};

export default checkSurroundings;
