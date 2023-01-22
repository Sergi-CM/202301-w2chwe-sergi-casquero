import {
  boardColumns,
  boardRows,
  body,
} from "../globalVariables/globalVariables.js";

const gameBoard = () => {
  const mainArea = document.createElement("section");
  mainArea.className = "main-area";

  const gameBoard = document.createElement("section");
  gameBoard.className = "main-area__board board";

  for (let rows = 0; rows < boardColumns; rows++) {
    for (let columns = 0; columns < boardRows; columns++) {
      const square = document.createElement("div");
      square.className = `board__square cell-${columns}-${rows}`;

      gameBoard.appendChild(square);
    }
  }

  mainArea.appendChild(gameBoard);
  body.appendChild(mainArea);
};

export default gameBoard;
