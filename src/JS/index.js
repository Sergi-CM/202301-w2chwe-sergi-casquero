import generateBoard from "./board/generateBoard.js";
import checkSurroundings from "./functions/checkSurroundings.js";
import { boardRows, boardColumns } from "./globalVariables/globalVariables.js";

console.table(generateBoard(boardColumns, boardRows));
checkSurroundings();
