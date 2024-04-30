class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
  }

  placeShip(ship, coordinates) {
    this.ships.push({ ship, coordinates });
  }

  receiveAttack(coordinates) {
    const hit = this.ships.find((ship) => ship.coordinates.some((coord) => coord[0]
    === coordinates[0] && coord[1] === coordinates[1]));
    if (hit) {
      hit.ship.hit();
      return true;
    }
    this.missedShots.push(coordinates);
    return false;
  }

  allSunk() {
    return this.ships.every((ship) => ship.ship.isSunk());
  }
}

export default Gameboard;
