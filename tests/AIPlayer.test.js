import AIPlayer from "../src/AIPlayer";
test('get random coordinate', () => { 
  const coordinate = AIPlayer.getRandomCoordinates();
  expect(coordinate).toEqual(expect.arrayContaining([expect.any(Number), expect.any(Number)]));
  expect(coordinate[0]).toBeGreaterThanOrEqual(1);
  expect(coordinate[0]).toBeLessThanOrEqual(10);
  expect(coordinate[1]).toBeGreaterThanOrEqual(1);
  expect(coordinate[1]).toBeLessThanOrEqual(10);
});

test('get direction', () => {
  const direction = AIPlayer.getDirection([1, 1], [1, 2]);
  expect(direction).toBe('vertical');
  const direction2 = AIPlayer.getDirection([1, 1], [2, 1]);
  expect(direction2).toBe('horizontal');
  const direction3 = AIPlayer.getDirection([1, 1], [2, 2]);
  expect(direction3).toBe(null);
});

test('add potential targets', () => {
  const aiPlayer = new AIPlayer();
  aiPlayer.addPotentialTargets([2, 2]);
  expect(aiPlayer.potentialTarget).toEqual(expect.arrayContaining([[1, 2], [3, 2], [2, 3], [2, 1]]));
});

test('check valid coordinate', () => {
  const valid = AIPlayer.isValidCoordinate([1, 1]);
  expect(valid).toBe(true);
});

test('filter valid targets', () => {
  const aiPlayer = new AIPlayer();
  aiPlayer.attackedCoords = new Set(['[1,1]']);
  const valid = AIPlayer.filterValidTargets([[1, 1], [2, 2]], aiPlayer.attackedCoords);
  expect(valid).toEqual(expect.arrayContaining([[2, 2]]));
});