class Cell {
  isAlive;
  willBeAlive;
  xCoordinate;
  yCoordinate;

  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.isAlive = Math.random() < 0.08;
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
