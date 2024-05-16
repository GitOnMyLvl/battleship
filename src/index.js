import './style.css';
import renderGameboard from './GameController';
import Player from './Player';
import EasyAI from './EasyAI';
import Gameboard from './Gameboard';
import Ship from './Ship';

const destroyer = new Ship(3);
const submarine = new Ship(2);
const humanPlayer = new Player(new Gameboard(), true, true);
const computerPlayer = new EasyAI(new Gameboard(), false, false);
humanPlayer.gameboard.placeShip(destroyer, [[1, 1], [1, 2], [1, 3]]);
computerPlayer.gameboard.placeShip(submarine, [[2, 1], [2, 2]]);
const board = document.querySelector('.player-one-board');
renderGameboard(board, humanPlayer.gameboard, humanPlayer);
const computerBoard = document.querySelector('.player-two-board');
renderGameboard(computerBoard, computerPlayer.gameboard, computerPlayer);
console.log(computerPlayer.makeMove(humanPlayer.gameboard));
