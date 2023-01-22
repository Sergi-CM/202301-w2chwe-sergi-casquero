import { board } from "../globalVariables/globalVariables.js";
import nextGeneration from "./nextGeneration.js";

const generationLooper = () => {
  setInterval(() => {
    console.log(board);
    nextGeneration();
  }, 200);
};

export default generationLooper;
