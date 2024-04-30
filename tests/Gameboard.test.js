import Gameboard from '../src/Gameboard';
import Ship from '../src/Ship';

test('place ship on gameboard', () => {
  const gameboard = new Gameboard();
  const destroyer = new Ship(3);
  gameboard.placeShip(destroyer, [[0, 0], [0, 1], [0, 2]] );
  expect(gameboard.ships[0].ship).toEqual(destroyer);
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

test('all ships sunk', () => {
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