import './style.css';
import renderGameboard from './GameController';
import Player from './Player';
import Gameboard from './Gameboard';

const humanPlayer = new Player(new Gameboard(), true);
console.log(humanPlayer.gameboard);
const board = document.querySelector('.game-board');
renderGameboard(board, humanPlayer.gameboard);
