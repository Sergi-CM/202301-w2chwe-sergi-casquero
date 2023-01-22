import generationLooper from "../functions/generationLooper.js";

const buttons = () => {
  const mainArea = document.querySelector(".main-area");

  const buttonsArea = document.createElement("div");
  buttonsArea.className = "main-area__buttons";

  const regenerateButton = document.createElement("button");
  regenerateButton.textContent = "Regenerate";
  regenerateButton.className = "regenerate-button";
  regenerateButton.addEventListener("click", () => {
    location.reload();
  });

  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.className = "start-button";
  startButton.addEventListener("click", () => {
    generationLooper();
  });

  buttonsArea.append(regenerateButton, startButton);
  mainArea.append(buttonsArea);
};

export default buttons;
