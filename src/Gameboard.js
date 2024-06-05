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
    const allCoordinates = this.ships.flatMap((s) => s.coordinates);
    const overlapping = coordinates.some((coord) => allCoordinates.some((c) => c[0] === coord[0]
      && c[1] === coord[1]));
    if (overlapping) {
      return;
    }
    this.ships.push({ ship, coordinates });
  }

  receiveAttack(coordinates) {
    const hit = this.ships.find((ship) => ship.coordinates.some((coord) => coord[0]
      === coordinates[0] && coord[1] === coordinates[1]));
    if (hit) {
      hit.ship.hit();
      if (hit.ship.isSunk()) {
        return { hit: true, sunk: true, coordinates: hit.coordinates };
      }
      return { hit: true, sunk: false };
    }
    this.pushMissedShot(coordinates);
    return { hit: false };
  }

  generateRandomShipCoordinates(shipLength) {
    const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    const maxAttempts = 1000;
    let attempts = 0;
    while (attempts < maxAttempts) {
      attempts += 1;
      const x = Math.floor(Math.random() * 10) + 1;
      const y = Math.floor(Math.random() * 10) + 1;
      let isValid = true;
      const coordinates = [];
      for (let i = 0; i < shipLength; i += 1) {
        if (direction === 'horizontal') {
          if (x + shipLength > 10) isValid = false;
          coordinates.push([x + i, y]);
        } else {
          if (y + shipLength > 10) isValid = false;
          coordinates.push([x, y + i]);
        }
      }
      const allCoordinates = this.ships.flatMap((s) => s.coordinates);
      const overlapping = coordinates.some((coord) => allCoordinates.some((c) => c[0] === coord[0]
        && c[1] === coord[1]));
      if (!overlapping && isValid) {
        return coordinates;
      }
    }
    throw new Error('Unable to place ship on gameboard.');
  }

  placeAllShipsRandom(ships) {
    ships.forEach((ship) => {
      this.placeShip(ship, this.generateRandomShipCoordinates(ship.length));
    });
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
