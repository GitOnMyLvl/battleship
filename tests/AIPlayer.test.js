import AIPlayer from "../src/AIPlayer";
test('get random coordinate', () => { 
  const coordinate = AIPlayer.getRandomCoordinates();
  expect(coordinate).toEqual(expect.arrayContaining([expect.any(Number), expect.any(Number)]));
  expect(coordinate[0]).toBeGreaterThanOrEqual(1);
  expect(coordinate[0]).toBeLessThanOrEqual(10);
  expect(coordinate[1]).toBeGreaterThanOrEqual(1);
  expect(coordinate[1]).toBeLessThanOrEqual(10);
});