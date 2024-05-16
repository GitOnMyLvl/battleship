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

const markHit = (cell) => cell.classList.add('hit');
const markMiss = (cell) => cell.classList.add('miss');
const markSunk = (container, coordinates) => {
  coordinates.forEach((coord) => {
    const cell = container.querySelector(`.cell[data-x="${coord[0]}" ][data-y="${coord[1]}"]`);
    cell.classList.add('sunk');
  });
};

const aiMove = (aiPlayer, playerGameboard, playerContainer) => {
  const coords = aiPlayer.makeMove(playerGameboard);
  const attackResult = playerGameboard.receiveAttack(coords);
  const cell = playerContainer.querySelector(`.cell[data-x="${coords[0]}" ][data-y="${coords[1]}"]`);
  if (attackResult.hit) {
    markHit(cell);
    if (attackResult.sunk) {
      markSunk(playerContainer, attackResult.coordinates);
    }
  } else {
    markMiss(cell);
  }
};

const renderGameboard = (container, gameboard, player, opponent) => {
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
          markHit(cell);
          if (attackResult.sunk) {
            markSunk(container, attackResult.coordinates);
          }
        } else {
          markMiss(cell);
        }
        cell.removeEventListener('click', handleClick);

        if (!gameboard.allSunk()) {
          setTimeout(() => aiMove(player, opponent.gameboard, document.querySelector('.player-one-board')), 100);
        }
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
