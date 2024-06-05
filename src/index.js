import './style.css';
import renderGameboard from './GameController';
import Player from './Player';
import EasyAI from './EasyAI';
import AdvancedAi from './AdvancedAI';
import Gameboard from './Gameboard';
import Ship from './Ship';

const destroyerP1 = new Ship(3);
const submarineP1 = new Ship(2);
const cruiserP1 = new Ship(3);
const battleshipP1 = new Ship(4);
const carrierP1 = new Ship(5);

const carrierP2 = new Ship(5);
const battleshipP2 = new Ship(4);
const cruiserP2 = new Ship(3);
const submarineP2 = new Ship(3);
const destroyerP2 = new Ship(2);

const humanPlayer = new Player(new Gameboard(), true, true);
const computerPlayer = new EasyAI(new Gameboard(), false, false);
const humanShips = [destroyerP1, submarineP1, cruiserP1, battleshipP1, carrierP1];
const computerShips = [destroyerP2, submarineP2, cruiserP2, battleshipP2, carrierP2];
humanPlayer.gameboard.placeAllShipsRandom(humanShips);
computerPlayer.gameboard.placeAllShipsRandom(computerShips);

const board = document.querySelector('.player-one-board');
renderGameboard(board, humanPlayer.gameboard, humanPlayer, computerPlayer);
const computerBoard = document.querySelector('.player-two-board');
renderGameboard(computerBoard, computerPlayer.gameboard, computerPlayer, humanPlayer);
