import AIPlayer from './AIPlayer';

class EasyAI extends AIPlayer {
  constructor(gameboard) {
    super(gameboard, 'easy');
    this.attackCoords = new Set();
  }

  makeMove(opponentGameboard) {
    let coords;
    do {
      coords = this.constructor.getRandomCoordinates();
    } while (this.attackCoords.has(coords.toString()));
    this.attackCoords.add(coords.toString());
    opponentGameboard.receiveAttack(coords);
    return coords;
  }
}

export default EasyAI;
