class Board {
  constructor() {
    this.grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  }

  isGameOver() {

  }

  findWinner() {

  }

  display() {
    this.printRow(this[0])
    this.printLine()
    this.printRow(this[1])
  }

  printRow(row) {
    console.log(row.join(' |'))
  }

  printLine() {
    console.log('-----')
  }


  isValidMove(position) {

  }

  placeMark(position, symbol) {

  }
}

// const Board = require('/board.js')

class Game {
  constructor(pl1, pl2) {
    this.pl1 = pl1
    this.pl2 = pl2
    this.board = new Board();
    // module.exports = Board;
    this.currPl = this.pl1
  }

  startGame() {

  }

  getMove() {

  }

  logWinOrTie() {

  }

  giveDirec() {

  }

  switchPlayers() {

  }

}


// readline sync

class HumanPlayer {
  constructor(symbol, name) {
    this.name = name;
    this.symbol = symbol;

  }
}

// getMove() {
//
// }

let board = new Board();
board.display();
