import Gameboard from '../src/Gameboard';
import Ship from '../src/Ship';

test('push missed shot to gameboard', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.missedShots).toEqual([[0, 0]]);
});

test('push missed shot to gameboard only once', () => {
  const gameboard = new Gameboard();
  gameboard.pushMissedShot([0, 0]);
  gameboard.pushMissedShot([0, 0]);
  expect(gameboard.missedShots).toEqual([[0, 0]]);
});

test('reset gameboard', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([0, 0]);
  gameboard.reset();
  expect(gameboard.missedShots).toEqual([]);
});
test('place ship on gameboard', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]] );
  expect(gameboard.ships[0].ship).toEqual(destroyer);
});

test('place ship on gameboard only once', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]]);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]]);
  expect(gameboard.ships.length).toEqual(1);
});

test( 'place two different ships on overlapping coordinates', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  const submarine = new Ship(2);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]]);
  gameboard.placeShip(submarine, [[0, 0], [1, 0]]);
  expect(gameboard.ships.length).toEqual(1);
});

test('receive attack on gameboard and hit', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]]);
  gameboard.receiveAttack([0, 1]);
  expect(destroyer.hits).toEqual(1);
});

test('receive attack on gameboard and miss', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]]);
  gameboard.receiveAttack([1, 1]);
  expect(gameboard.missedShots).toEqual([[1, 1]]);
});

test('all ships sunk and return true', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  const submarine = new Ship(2);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]]);
  gameboard.placeShip(submarine, [[1, 0], [1, 1]]);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 1]);
  gameboard.receiveAttack([0, 2]);
  gameboard.receiveAttack([1, 0]);
  gameboard.receiveAttack([1, 1]);
  expect(gameboard.allSunk()).toBe(true);
});

test('all ships not sunk and return false', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]]);
  expect(gameboard.allSunk()).toBe(false);
});