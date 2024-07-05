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

const renderSetupGameboard = (container, gameboard) => {
  for (let y = 1; y <= 10; y += 1) {
    for (let x = 1; x <= 10; x += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;
      container.appendChild(cell);
    }
  }
  renderShips(container, gameboard);
};

export default renderSetupGameboard;
