const renderShips = (container, gameboard) => {
  gameboard.getShips().forEach((ship) => {
    ship.coordinates.forEach((coord) => {
      const marker = document.createElement('div');
      marker.classList.add('marker');
      // selects the cell with the coordinates of the ship
      const cell = container.querySelector(`.cell[data-x="${coord[0]}" ][data-y="${coord[1]}"]`);
      cell.classList.add('ship');
      cell.appendChild(marker);
    });
  });
};

const showGameOverMessage = (message) => {
  const gameOverMessage = document.getElementById('game-over-message');
  gameOverMessage.querySelector('h2').textContent = message;
  gameOverMessage.classList.remove('hidden');
};

const addResetListener = () => {
  document.getElementById('restart-button').addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigation', { detail: { screen: 'setup' } });
    document.dispatchEvent(navigationEvent);
  });
};

const checkGameOver = (playerOneGameboard, playerTwoGameboard) => {
  if (playerOneGameboard.allSunk()) {
    showGameOverMessage('Game Over! You Lose');
    addResetListener();
  } else if (playerTwoGameboard.allSunk()) {
    showGameOverMessage('Game Over! You Win');
    addResetListener();
  }
};

const markHit = (cell) => cell.classList.add('hit');
const markMiss = (cell) => cell.classList.add('miss');
const markSunk = (container, coordinates) => {
  coordinates.forEach((coord) => {
    // selects the cell with the coordinates of the sunk ship
    const cell = container.querySelector(`.cell[data-x="${coord[0]}" ][data-y="${coord[1]}"]`);
    cell.classList.add('sunk');
  });
};

const aiMove = (aiPlayer, playerGameboard, playerContainer) => {
  const { coords, attackResult } = aiPlayer.makeMove(playerGameboard);
  const cell = playerContainer.querySelector(`.cell[data-x="${coords[0]}" ][data-y="${coords[1]}"]`);
  if (attackResult.hit) {
    markHit(cell);
    if (attackResult.sunk) {
      markSunk(playerContainer, attackResult.coordinates);
    }
  } else {
    markMiss(cell);
  }

  checkGameOver(playerGameboard, aiPlayer.gameboard);
};

const playerMove = (cell, coords, gameboard, opponent, container, player) => {
  const attackResult = gameboard.receiveAttack(coords);
  if (attackResult.hit) {
    markHit(cell);
    if (attackResult.sunk) {
      markSunk(container, attackResult.coordinates);
    }
  } else {
    markMiss(cell);
  }

  if (!gameboard.allSunk()) {
    setTimeout(() => aiMove(player, opponent.gameboard, document.querySelector('.player-one-board')), 100);
  }
  checkGameOver(opponent.gameboard, gameboard);
};

const renderPlayGameboard = (container, gameboard, player, opponent) => {
  for (let y = 1; y <= 10; y += 1) {
    for (let x = 1; x <= 10; x += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;

      const handleClick = () => {
        const coords = [parseInt(cell.dataset.x, 10), parseInt(cell.dataset.y, 10)];
        playerMove(cell, coords, gameboard, opponent, container, player);
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

export default renderPlayGameboard;
