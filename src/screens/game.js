import renderGameboard from '../GameController';
import Player from '../Player';
import EasyAI from '../AI/EasyAI';
import AdvancedAi from '../AI/AdvancedAI';
import Gameboard from '../Gameboard';
import Ship from '../Ship';

const renderGameScreen = (container, difficulty) => {
  const screen = container;
  screen.innerHTML = `
    <div id="game-screen" class="active game-screen">
      <div class="game-board player-one-board" id="player-one-board"></div>
      <div class="game-board player-two-board" id="player-two-board"></div>
    </div>
    `;

  const playerGameboard = new Gameboard();
  const aiGameboard = new Gameboard();

  const humanPlayer = new Player(playerGameboard, true, true);
  const aiPlayer = difficulty === 'easy' ? new EasyAI(aiGameboard, false, false) : new AdvancedAi(aiGameboard, false, false);

  const humanShips = [new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];
  const aiShips = [new Ship(2), new Ship(3), new Ship(3), new Ship(4), new Ship(5)];

  playerGameboard.placeAllShipsRandom(humanShips);
  aiGameboard.placeAllShipsRandom(aiShips);

  const playerBoard = document.querySelector('.player-one-board');
  const aiBoard = document.querySelector('.player-two-board');

  renderGameboard(playerBoard, playerGameboard, humanPlayer, aiPlayer);
  renderGameboard(aiBoard, aiGameboard, aiPlayer, humanPlayer);
};

export default renderGameScreen;
