import generateBoard from "../board/generateBoard.js";

const boardRows = 100;
const boardColumns = 100;

const board = generateBoard(boardRows, boardColumns);

const body = document.querySelector("body");

export { boardRows, boardColumns, board, body };
