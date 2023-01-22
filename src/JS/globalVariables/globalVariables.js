import generateBoard from "../board/generateBoard.js";

const boardRows = 80;
const boardColumns = 80;

const board = generateBoard(boardRows, boardColumns);

const body = document.querySelector("body");

export { boardRows, boardColumns, board, body };
