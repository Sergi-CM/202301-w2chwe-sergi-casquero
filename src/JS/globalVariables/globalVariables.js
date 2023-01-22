import generateBoard from "../board/generateBoard.js";

const boardRows = 5;
const boardColumns = 5;

const board = generateBoard(boardRows, boardColumns);

const body = document.querySelector("body");

export { boardRows, boardColumns, board, body };
