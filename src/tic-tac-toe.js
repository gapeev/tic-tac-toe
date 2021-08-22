class TicTacToe {
  constructor() {
    this.nextSymbol = "x";
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.nextSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.board[rowIndex][columnIndex]) {
      this.board[rowIndex][columnIndex] = this.nextSymbol;
      this.nextSymbol = this.nextSymbol === "x" ? "o" : "x";
    }
  }

  isFinished() {
    return this.getWinner() !== null || this.isDraw();
  }

  getWinner() {
    let winner = null;

    [
      ...this.board,
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]],
    ].some(([first, second, third]) => {
      if (first === second && first === third && first !== null) {
        winner = first;
        return true;
      }
      return false;
    });

    return winner;
  }

  noMoreTurns() {
    return this.board.every((row) => row.every((cell) => cell));
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
