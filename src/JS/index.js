/* eslint-disable capitalized-comments */
import generateBoard from "./board/generateBoard.js";
// import generationLooper from "./functions/generationLooper.js";
import { boardRows, boardColumns } from "./globalVariables/globalVariables.js";
import cellPrinter from "./uiGenerator/cellPrinter.js";
import uiGenerator from "./uiGenerator/uiGenerator.js";

uiGenerator();
generateBoard(boardColumns, boardRows);
cellPrinter();

// generationLooper();
