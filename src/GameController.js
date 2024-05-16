const renderShips = (container, gameboard) => {
  gameboard.getShips().forEach((ship) => {
    ship.coordinates.forEach((coord) => {
      const marker = document.createElement('div');
      marker.classList.add('marker');
      const cell = container.querySelector(`.cell[data-x="${coord[0]}" ][data-y="${coord[1]}"]`);
      cell.classList.add('ship');
      cell.appendChild(marker);
    });
  });
};

const renderGameboard = (container, gameboard, player) => {
  for (let y = 1; y <= 10; y += 1) {
    for (let x = 1; x <= 10; x += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;

      const handleClick = () => {
        const coords = [parseInt(cell.dataset.x, 10), parseInt(cell.dataset.y, 10)];
        const attackResult = gameboard.receiveAttack(coords);
        if (attackResult.hit) {
          cell.classList.add('hit');
          if (attackResult.sunk) {
            attackResult.coordinates.forEach((coord) => {
              const sunkCell = container.querySelector(`.cell[data-x="${coord[0]}" ][data-y="${coord[1]}"]`);
              sunkCell.classList.add('sunk');
            });
          }
          // if (gameboard.allSunk()) {}
        } else {
          cell.classList.add('miss');
        }
        cell.removeEventListener('click', handleClick);
      };
      if (!player.currentPlayer) {
        cell.addEventListener('click', handleClick);
      }
      container.appendChild(cell);
    }
  }
  if (player.currentPlayer) {
    renderShips(container, gameboard);
  }
};

export default renderGameboard;
