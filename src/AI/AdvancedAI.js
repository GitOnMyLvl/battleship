import AIPlayer from './AIPlayer';

class AdvancedAi extends AIPlayer {
  constructor(gameboard) {
    super(gameboard, 'advanced');
    this.attackedCoords = new Set();
  }

  makeMove(opponentGameboard) {
    let coords;
    if (this.potentialTarget.length > 0) {
      coords = this.constructor.filterValidTargets(
        this.potentialTarget,
        this.attackedCoords,
      ).shift();
      if (!coords) {
        coords = this.constructor.getRandomCoordinates();
      }
    } else {
      coords = this.constructor.getRandomCoordinates();
    }
    while (this.attackedCoords.has(coords.toString())) {
      coords = this.constructor.getRandomCoordinates();
    }
    this.attackedCoords.add(coords.toString());

    const attackResult = opponentGameboard.receiveAttack(coords);

    if (attackResult.hit) {
      if (attackResult.sunk) {
        this.potentialTarget = [];
        this.lastDirection = null;
        this.lastHit = null;
      } else {
        this.addPotentialTargets(coords);
        if (this.lastHit) {
          this.lastDirection = this.constructor.getDirection(this.lastHit, coords);

          if (this.lastDirection) {
            this.potentialTarget = this.potentialTarget.filter((coord) => this.constructor
              .getDirection(this.lastHit, coord) === this.lastDirection);
          }
        }
      }
      this.lastHit = coords;
    }
    return { coords, attackResult };
  }
}

export default AdvancedAi;
