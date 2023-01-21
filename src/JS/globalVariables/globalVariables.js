import generateBoard from "../board/generateBoard.js";

const boardRows = 5;
const boardColumns = 5;

const board = generateBoard(boardRows, boardColumns);

export { boardRows, boardColumns, board };
