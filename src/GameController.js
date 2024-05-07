const renderGameboard = (container, gameboard) => {
  for (let y = 1; y <= 10; y += 1) {
    for (let x = 1; x <= 10; x += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.addEventListener('click', () => {
        const coords = [parseInt(cell.dataset.x, 10), parseInt(cell.dataset.y, 10)];
        const wasHit = gameboard.receiveAttack(coords);
        if (wasHit) {
          cell.classList.add('hit');
        } else {
          cell.classList.add('miss');
        }
      });
      container.appendChild(cell);
    }
  }
};

export default renderGameboard;
