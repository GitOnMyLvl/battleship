import './style.css';
import renderGameboard from './GameController';
import Player from './Player';
import EasyAI from './EasyAI';
import Gameboard from './Gameboard';
import Ship from './Ship';

const destroyerP1 = new Ship(3);
const submarineP1 = new Ship(2);
const cruiserP1 = new Ship(3);
const battleshipP1 = new Ship(4);
const carrierP1 = new Ship(5);

const humanPlayer = new Player(new Gameboard(), true, true);
const computerPlayer = new EasyAI(new Gameboard(), false, false);
humanPlayer.gameboard.placeShip(destroyerP1, [[1, 1], [1, 2], [1, 3]]);
humanPlayer.gameboard.placeShip(submarineP1, [[2, 1], [2, 2]]);
humanPlayer.gameboard.placeShip(cruiserP1, [[3, 1], [3, 2], [3, 3]]);
humanPlayer.gameboard.placeShip(battleshipP1, [[4, 4], [5, 4], [6, 4], [7, 4]]);
humanPlayer.gameboard.placeShip(carrierP1, [[5, 5], [5, 6], [5, 7], [5, 8], [5, 9]]);

const board = document.querySelector('.player-one-board');
renderGameboard(board, humanPlayer.gameboard, humanPlayer, computerPlayer);
const computerBoard = document.querySelector('.player-two-board');
renderGameboard(computerBoard, computerPlayer.gameboard, computerPlayer, humanPlayer);
