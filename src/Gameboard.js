class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
  }

  reset() {
    this.ships = [];
    this.missedShots = [];
  }

  pushMissedShot(coordinates) {
    if (this.missedShots.some((coord) => coord[0] === coordinates[0]
    && coord[1] === coordinates[1])) {
      return;
    }
    this.missedShots.push(coordinates);
  }

  placeShip(ship, coordinates) {
    this.ships.push({ ship, coordinates });
  }

  receiveAttack(coordinates) {
    console.log(coordinates);
    const hit = this.ships.find((ship) => ship.coordinates.some((coord) => coord[0]
    === coordinates[0] && coord[1] === coordinates[1]));
    if (hit) {
      hit.ship.hit();
      return true;
    }
    this.pushMissedShot(coordinates);
    return false;
  }

  allSunk() {
    return this.ships.every((ship) => ship.ship.isSunk());
  }

  getShips() {
    return this.ships;
  }

  getMissedShots() {
    return this.missedShots;
  }

  setShips(ships) {
    this.ships = ships;
  }

  setMissedShots(missedShots) {
    this.missedShots = missedShots;
  }
}

export default Gameboard;
