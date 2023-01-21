import generateBoard from "./board.js";

describe("Given a function generateBoard", () => {
  describe("When it receives 3 and 3 as width and height", () => {
    test("Then it should return [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]", () => {
      const boardWidth = 3;
      const boardHeight = 3;
      const expectedBoard = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ];

      const generatedBord = generateBoard(boardWidth, boardHeight);

      expect(generatedBord).toStrictEqual(expectedBoard);
    });
  });
});
