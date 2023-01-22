import { body } from "../globalVariables/globalVariables.js";

const header = () => {
  const header = document.createElement("h1");
  header.textContent = "F*ckin' Game of Life";
  header.className = "header";

  body.appendChild(header);
};

export default header;
