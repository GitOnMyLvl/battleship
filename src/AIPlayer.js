import Player from './Player';

class AIPlayer extends Player {
  constructor(gameboard, difficulty) {
    super(gameboard, false, false);
    this.difficulty = difficulty;
    this.lastHit = null;
    this.lastDirection = null;
    this.potentialTarget = [];
  }

  static getRandomCoordinates() {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    return [x, y];
  }

  static getDirection(start, end) {
    if (start[1] === end[1]) {
      return 'horizontal';
    } if (start[0] === end[0]) {
      return 'vertical';
    }
    return null;
  }

  addPotentialTargets(coords) {
    const [x, y] = coords;
    const potentialCoords = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    this.potentialTarget.push(...potentialCoords.filter(AIPlayer.isValidCoordinate));
  }

  static isValidCoordinate(coord) {
    const [x, y] = coord;
    return x >= 1 && x <= 10 && y >= 1 && y <= 10;
  }

  static filterValidTargets(targets, attackedCoords) {
    return targets.filter((coord) => !attackedCoords.has(coord.toString()));
  }
}

export default AIPlayer;
