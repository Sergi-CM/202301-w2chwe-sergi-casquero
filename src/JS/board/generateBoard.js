import Cell from "../Cell/Cell.js";

const generateBoard = (gridXCells, gridYCells) => {
  const board = [];
  for (let i = 0; i < gridYCells; i++) {
    const row = [];
    for (let j = 0; j < gridXCells; j++) {
      row.push(new Cell(j, i));
    }

    board.push(row);
  }

  return board;
};

export default generateBoard;
