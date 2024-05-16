import Player from './Player';

class AIPlayer extends Player {
  constructor(gameboard, difficulty) {
    super(gameboard, false, false);
    this.difficulty = difficulty;
    this.lastHit = null;
    this.lastDirection = null;
  }

  static getRandomCoordinates() {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    return [x, y];
  }

  static getDirection(start, end) {
    if (start[0] === end[0]) {
      return 'horizontal';
    } if (start[1] === end[1]) {
      return 'vertical';
    }
    return null;
  }
}

export default AIPlayer;
