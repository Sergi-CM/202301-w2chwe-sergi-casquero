import { board } from "../globalVariables/globalVariables";

const cellPrinter = () => {
  board.forEach((row) => {
    row.forEach((cell) => {
      const visibleCell = document.querySelector(
        `.cell-${cell.xCoordinate}-${cell.yCoordinate}`
      );
      if (cell.isAlive) {
        visibleCell.classList.add("alive");
      } else {
        visibleCell.classList.remove("alive");
      }
    });
  });
};

export default cellPrinter;
