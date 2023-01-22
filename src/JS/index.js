import generateBoard from "./board/generateBoard.js";
import generationLooper from "./functions/generationLooper.js";
import { boardRows, boardColumns } from "./globalVariables/globalVariables.js";
import uiGenerator from "./uiGenerator/uiGenerator.js";

uiGenerator();
generateBoard(boardColumns, boardRows);
generationLooper();
