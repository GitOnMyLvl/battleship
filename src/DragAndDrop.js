const initializeDragAndDrop = () => {
  const ships = document.querySelectorAll('.ship');
  const cells = document.querySelectorAll('.cell');

  ships.forEach((ship) => {
    const draggableShip = ship;
    draggableShip.draggable = true;

    draggableShip.addEventListener('dragstart', (e) => {
      draggableShip.classList.add('dragging');
      e.dataTransfer.setData('text/plain', e.target.dataset.length);
    });

    draggableShip.addEventListener('dragend', () => {
      draggableShip.classList.remove('dragging');
    });
  });

  cells.forEach((cell) => {
    cell.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggingShip = document.querySelector('.dragging');
      if (draggingShip) {
        cell.appendChild(draggingShip);
      }
    });

    cell.addEventListener('drop', (e) => {
      e.preventDefault();
      const length = e.dataTransfer.getData('text/plain');
      const x = parseInt(cell.dataset.x, 10);
      const y = parseInt(cell.dataset.y, 10);

      console.log(`Placing ship of length ${length} at (${x}, ${y})`);
    });
  });
};

export default initializeDragAndDrop;
