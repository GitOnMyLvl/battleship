import AIPlayer from './AIPlayer';

class EasyAI extends AIPlayer {
  constructor(gameboard) {
    super(gameboard, 'easy');
  }

  makeMove(opponentGameboard) {
    let coords;
    do {
      coords = AIPlayer.getRandomCoordinates();
    } while (opponentGameboard.receiveAttack(coords) === false); // Avoid repeat shots
    return coords;
  }
}

export default EasyAI;
