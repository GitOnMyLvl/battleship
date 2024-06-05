import AIPlayer from './AIPlayer';

class EasyAI extends AIPlayer {
  constructor(gameboard) {
    super(gameboard, 'easy');
    this.attackedCoords = new Set();
  }

  makeMove(opponentGameboard) {
    let coords;
    do {
      coords = this.constructor.getRandomCoordinates();
    } while (this.attackedCoords.has(coords.toString()));
    this.attackedCoords.add(coords.toString());
    const attackResult = opponentGameboard.receiveAttack(coords);
    return { coords, attackResult };
  }
}

export default EasyAI;
