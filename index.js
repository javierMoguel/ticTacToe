import * as defines from './modules/defines.js';
import drawer from './modules/drawer.js'
import player from './modules/player.js';
import weHaveAWinner from './modules/weHaveAWinner.js';
import {turnoMaquina} from './modules/deepBlue.js';

const player1 = new player(1);
let player2 = new player(2);
const winner = new weHaveAWinner();
let myDrawer = new drawer();
let playerActive;

myDrawer.crearTablero();
addLogicToCelds();

document.querySelector(`#${defines.reiniciar}`).addEventListener('click', () => {
  myDrawer.reinitMethod();
  addLogicToCelds();
});

document.querySelector(defines.form).addEventListener('change', (event) => {
  player2 = new player(event.target.id);
  myDrawer.reinitMethod();
  addLogicToCelds();
  playerActive = player1;
});

function checkWinner( horizontal, vertical, simbolo) {
  if (winner.checkIfWin( horizontal, vertical, simbolo )) {
    myDrawer.reinitMethod();
    addLogicToCelds();
  } else {
    playerActive = playerActive === player1 ? player2 : player1;
  }
}

function addLogicToCelds() {
  playerActive = player1;
  winner.count = 0;
  document.querySelectorAll(defines.celda).forEach( celda => {
    celda.addEventListener('click', (event) => {
      playerActive.drawCelda(event);
      checkWinner( event.target.dataset.horizontal, event.target.dataset.vertical, playerActive.playerInfo.symbol )
      if ( !playerActive.playerInfo.isHuman ) {
        const celda = turnoMaquina( playerActive.playerInfo.symbol );
        checkWinner( celda.dataset.horizontal, celda.dataset.vertical, playerActive.playerInfo.symbol);
      }
    });
  })
}