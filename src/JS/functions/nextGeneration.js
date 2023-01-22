import { board } from "../globalVariables/globalVariables.js";
import checkSurroundings from "./checkSurroundings.js";

const nextGeneration = () => {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (checkSurroundings(cell)) {
        cell.born();
      } else {
        cell.kill();
      }
    });
  });
};

export default nextGeneration;
