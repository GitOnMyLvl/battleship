class Player {
  constructor(gameboard, realPlayer = false, currentPlayer = false) {
    this.gameboard = gameboard;
    this.realPlayer = realPlayer;
    this.currentPlayer = currentPlayer;
  }
}

export default Player;
