import generateBoard from "./board/generateBoard.js";
import nextGeneration from "./functions/nextGeneration.js";
import { boardRows, boardColumns } from "./globalVariables/globalVariables.js";

console.log(generateBoard(boardColumns, boardRows));
nextGeneration();
