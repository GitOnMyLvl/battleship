import './style.css';
import renderGameboard from './GameController';
import Player from './Player';
import Gameboard from './Gameboard';
import Ship from './Ship';

const destroyer = new Ship(3);
const humanPlayer = new Player(new Gameboard(), true);
humanPlayer.gameboard.placeShip(destroyer, [[1, 1], [1, 2], [1, 3]]);
console.log(humanPlayer.gameboard);
const board = document.querySelector('.game-board');
renderGameboard(board, humanPlayer.gameboard);
