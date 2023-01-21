class Cell {
  width = 7;
  height = 7;
  willBeAlive;
  xCoordinate;
  yCoordinate;

  constructor(gridX, gridY) {
    this.gridX = gridX;
    this.gridY = gridY;
    this.isAlive = Math.random() > 0.4;
  }

  born() {}

  kill() {}
}

export default Cell;
