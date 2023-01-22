import cellPrinter from "../uiGenerator/cellPrinter.js";
import nextGeneration from "./nextGeneration.js";

const generationLooper = () => {
  setInterval(() => {
    nextGeneration();
    cellPrinter();
  }, 200);
};

export default generationLooper;
