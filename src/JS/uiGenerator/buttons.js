const buttons = () => {
  const mainArea = document.querySelector(".main-area");

  const buttonsArea = document.createElement("div");
  buttonsArea.className = "main-area__buttons";

  const regenerateButton = document.createElement("button");
  regenerateButton.textContent = "Regenerate";
  regenerateButton.className = "regenerate-button";

  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.className = "start-button";

  buttonsArea.append(regenerateButton, startButton);
  mainArea.append(buttonsArea);
};

export default buttons;
