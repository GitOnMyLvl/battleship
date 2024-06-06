import initializeDragAndDrop from '../DragAndDrop';

const renderSetupScreen = (container) => {
  const screen = container;
  screen.innerHTML = `
    <div id="setup-screen" class="active setup-screen">
      <h1>Place your ships</h1>
      <div class="game-board" id="game-board"></div>
      <div id="ship-container" class="ship-container">
        <div class="ship" id="carrier" data-length="5"></div>
        <div class="ship" id="battleship" data-length="4"></div>
        <div class="ship" id="cruiser" data-length="3"></div>
        <div class="ship" id="submarine" data-length="3"></div>
        <div class="ship" id="destroyer" data-length="2"></div>
      </div>
      <h2>Chose difficulty</h2>
      <button id="easy" class="difficulty">Easy</button>
      <button id="advanced" class="difficulty">Advanced</button>
    </div>
    `;
  const gameBoard = document.getElementById('game-board');
  for (let y = 1; y <= 10; y += 1) {
    for (let x = 1; x <= 10; x += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = x;
      cell.dataset.y = y;
      gameBoard.appendChild(cell);
    }
  }

  initializeDragAndDrop();

  document.querySelectorAll('.difficulty').forEach((button) => {
    button.addEventListener('click', (e) => {
      const difficulty = e.target.id;
      const navigationEvent = new CustomEvent('navigation', { detail: { screen: 'game', difficulty } });
      document.dispatchEvent(navigationEvent);
    });
  });
};

export default renderSetupScreen;
