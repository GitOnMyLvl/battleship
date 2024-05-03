import Gameboard from './Gameboard';
import Ship from './Ship';
import Player from './Player';

const humanPlayer = new Player(new Gameboard(), true);
const computerPlayer = new Player(new Gameboard());

const renderGameboard = (container) => {
  for (let y = 1; y <= 10; y += 1) {
    for (let x = 1; x <= 10; x += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;
      container.appendChild(cell);
    }
  }
};

export default renderGameboard;
