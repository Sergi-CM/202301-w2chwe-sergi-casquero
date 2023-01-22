class Cell {
  isAlive;
  willBeAlive;
  xCoordinate;
  yCoordinate;
  display;

  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.isAlive = Math.random() < 0.3;
    this.display = this.isAlive ? "X" : " ";
  }

  born() {
    this.willBeAlive = true;
  }

  kill() {
    this.willBeAlive = false;
  }

  nextGeneration() {
    this.isAlive = this.willBeAlive;
  }
}

export default Cell;
