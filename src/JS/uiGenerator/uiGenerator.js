import buttons from "./buttons.js";
import gameBoard from "./gameBoard.js";
import header from "./header.js";

const uiGenerator = () => {
  header();
  gameBoard();
  buttons();
};

export default uiGenerator;
