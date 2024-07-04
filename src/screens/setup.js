import renderSetupGameboard from '../SetupController';
import Gameboard from '../Gameboard';
import Ship from '../Ship';

const renderSetupScreen = (container) => {
  const screen = container;
  screen.innerHTML = `
    <div id="setup-screen" class="active setup-screen">
      <div>
         <button id="place-ship" class="place-ship">Place Ships</button>
      </div>
      <div class="game-board player-one-board" id="player-one-board"></div>
      <h2>Chose difficulty</h2>
      <div class="difficulty-buttons">
        <button id="easy" class="difficulty">Easy</button>
        <button id="advanced" class="difficulty">Advanced</button>
      </div>
    </div>
      
    </div>
    `;
  const gameBoard = new Gameboard();
  const gameBoardContainer = document.querySelector('.game-board');
  const humanShips = [new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];
  const placeButton = document.getElementById('place-ship');
  gameBoard.placeAllShipsRandom(humanShips);
  renderSetupGameboard(gameBoardContainer, gameBoard);
  placeButton.addEventListener('click', () => {
    gameBoardContainer.innerHTML = '';
    gameBoard.reset();
    gameBoard.placeAllShipsRandom(humanShips);
    renderSetupGameboard(gameBoardContainer, gameBoard);
  });

  document.querySelectorAll('.difficulty').forEach((button) => {
    button.addEventListener('click', (e) => {
      const difficulty = e.target.id;
      const navigationEvent = new CustomEvent('navigation', { detail: { screen: 'game', difficulty, gameBoard } });
      document.dispatchEvent(navigationEvent);
    });
  });
};

export default renderSetupScreen;
