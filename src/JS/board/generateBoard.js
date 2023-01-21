import Cell from "../Cell/Cell.js";

const generateBoard = (gridXCells, gridYCells) => {
  const board = [];
  for (let i = 1; i <= gridXCells; i++) {
    const row = [];
    for (let j = 1; j <= gridYCells; j++) {
      row.push(new Cell(i, j));
    }

    board.push(row);
  }

  return board;
};

export default generateBoard;
