import {
  boardColumns,
  boardRows,
  body,
} from "../globalVariables/globalVariables.js";

const gameBoard = () => {
  const gameBoard = document.createElement("section");
  gameBoard.className = "game-board";

  for (let rows = 0; rows < boardColumns; rows++) {
    for (let columns = 0; columns < boardRows; columns++) {
      const square = document.createElement("div");
      square.className = `square cell-${columns}-${rows}`;

      gameBoard.appendChild(square);
    }
  }

  body.appendChild(gameBoard);
};

export default gameBoard;
