const generateBoard = (gridXCells, gridYCells) => {
  const board = [];
  for (let i = 0; i < gridXCells; i++) {
    const row = [];
    for (let j = 0; j < gridYCells; j++) {
      row.push(" ");
    }

    board.push(row);
  }

  return board;
};

console.log(generateBoard(10, 10));

export default generateBoard;
