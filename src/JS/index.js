import generateBoard from "./board/generateBoard.js";
import generationLooper from "./functions/generationLooper.js";
import { boardRows, boardColumns } from "./globalVariables/globalVariables.js";

generateBoard(boardColumns, boardRows);
generationLooper();
