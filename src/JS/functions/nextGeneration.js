import { board } from "../globalVariables/globalVariables.js";
import checkSurroundings from "./checkSurroundings.js";

const nextGeneration = () => {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (checkSurroundings(cell)) {
        cell.born();
        cell.nextGeneration();
      } else {
        cell.kill();
        cell.nextGeneration();
      }
    });
  });
};

export default nextGeneration;
