class Cell {
  isAlive;
  willBeAlive;
  xCoordinate;
  yCoordinate;

  constructor(gridX, gridY) {
    this.xCoordinate = gridX;
    this.yCoordinate = gridY;
    this.isAlive = Math.random() < 0.3;
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
