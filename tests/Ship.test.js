import Ship from '../src/Ship';

test('ship hit', () => { 
  const ship = new Ship(4);
  ship.hit();
  expect(ship.hits).toEqual(1);
 });


test('ship sunk after hits', () => { 
  const ship = new Ship(4);
  for (let i = 0 ; i < 4; i++) {
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
 });

 test('ship not sunk after hits', () => { 
  const ship = new Ship(4);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
 });