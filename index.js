//Módulo defines
const container = "ticTacContainer";
const reiniciar = "reiniciar";
const jugador1 = {
  isHuman: true,
  symbol: "X",
};
const jugador2 = {
  isHuman: true,
  symbol: "O",
};
const jugadorPc = {
  isHuman: false,
  symbol: "O",
};

let celdas;
const player1 = jugador1;
let player2 = jugador2;

let playerActive = player1;
let count = 0;

//Módulo de construcción

function crearTablero() {
  //Crear Tablero
  const containerSelected = document.querySelector(`#${container}`);
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < 3; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < 3; j++) {
      var celda = document.createElement("td");
      celda.setAttribute("onclick", "checkCelda(event)");
      celda.setAttribute("data-horizontal", `${i}`);
      celda.setAttribute("data-vertical", `${j}`);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
  }

  containerSelected.appendChild(tblBody);
  celdas = document.querySelectorAll("td");
}

crearTablero();

function playerSelector(e) {
  player2 = player2 === jugador2 ? jugadorPc : jugador2;
  playerActive = jugador1;
  reinitMethod();
}

//Botón Reiniciar

function reinitMethod() {
  const containerSelected = (document.querySelector(`#${container}`).innerHTML =
    "");
  crearTablero();
}

//Módulo lógica

//Lógica que comprueba si ha ganado

function checkIfWin(horizontal, vertical) {
  if (checkHorizontal(horizontal)) {
    return weHaveAWinner(true);
  } else if (checkVertical(vertical)) {
    return weHaveAWinner(true);
  } else if (checkDiagonales()) {
    return weHaveAWinner(true);
  }
  count++;
  if ( count === 9 ) {
      weHaveAWinner(false)
  }
}

function checkHorizontal(idHorizontal) {
  let countWin = 0;
  celdas.forEach((res) => {
    if (
      res.dataset.horizontal === idHorizontal &&
      res.innerHTML === playerActive.symbol
    ) {
      countWin++;
    }
  });
  return countWin === 3 ? true : false;
}

function checkVertical(idVertical) {
  let countWin = 0;
  celdas.forEach((res) => {
    if (
      res.dataset.vertical === idVertical &&
      res.innerHTML === playerActive.symbol
    ) {
      countWin++;
    }
  });
  return countWin === 3 ? true : false;
}

function checkDiagonales(idHorizontal, idVertical) {
  let countWin = 0;
  if (
    (celdas[0].innerHTML !== "" &&
      celdas[0].innerHTML === celdas[4].innerHTML &&
      celdas[4].innerHTML === celdas[8].innerHTML) ||
    (celdas[2].innerHTML !== "" &&
      celdas[2].innerHTML === celdas[4].innerHTML &&
      celdas[4].innerHTML === celdas[6].innerHTML)
  ) {
    return true;
  }
}

function weHaveAWinner( winner ) {
   winner ? alert(`El jugador que controla ${playerActive.symbol} ha ganado`) :
   alert(`Tablas`)
}

// Modificar celdas
function checkCelda(event) {
  if (!event.target.innerHTML) {
    event.target.innerHTML = playerActive.symbol;
    checkIfWin(event.target.dataset.horizontal, event.target.dataset.vertical);
    playerActive = playerActive === player1 ? player2 : player1;
    if (!playerActive.isHuman) {
      turnoMaquina();
    }
  }
}

//Turno del pc

function getRandom() {
  return Math.floor(Math.random() * (8 + 1));
}

function turnoMaquina() {
  let n = getRandom();
  if (!celdas[n].innerHTML) {
    celdas[n].innerHTML = playerActive.symbol;
    checkIfWin(celdas[n].dataset.horizontal, celdas[n].dataset.horizontal);
    playerActive = playerActive === player1 ? player2 : player1;
  } else {
    turnoMaquina();
  }
}
