//Módulo defines
const container = 'ticTacContainer';
const reiniciar = 'reiniciar';
const jugador1 = {
    isHuman: true,
    symbol: 'X'
};
const jugador2 = {
    isHuman: true,
    symbol: 'O'
};
const jugadorPc = {
    isHuman: false,
    symbol: 'O'
};



//Módulo de construcción

function crearTablero() { //Crear Tablero
    const containerSelected = document.querySelector(`#${container}`);
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 3; i++) {
        var hilera = document.createElement("tr");

        for (var j = 0; j < 3; j++) {
            var celda = document.createElement("td");
            celda.setAttribute('onclick', 'checkCelda(event)');
            celda.setAttribute('data-horizontal', `${i}`);
            celda.setAttribute('data-vertical', `${j}`);
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
        tabla.appendChild(tblBody);
    }

    containerSelected.appendChild(tblBody)
}

crearTablero();

function playerSelector(e){
    player2 = jugadorPc;
}




//Módulo lógica

//Lógica que comprueba si ha ganado
const celdas = document.querySelectorAll('td');

function checkIfWin( horizontal, vertical ) {

     if (checkHorizontal( horizontal ) ) {
        alert('has ganado')
    } else if ( checkVertical( vertical ) ) {
        alert('has ganado')
    } else if ( checkDiagonales() ) {
        console.log('win')
         //horiz y vertic iguales
     }
}

function checkHorizontal(idHorizontal) {
    let countWin = 0;
    celdas.forEach( res => {
        if ( res.dataset.horizontal === idHorizontal && res.innerHTML === playerActive.symbol) {
            countWin++;
        }
    })
    return countWin === 3 ? true : false;
}

function checkVertical(idVertical) {
    let countWin = 0;
    celdas.forEach( res => {
        if ( res.dataset.vertical === idVertical && res.innerHTML === playerActive.symbol) {
            countWin++;
        }
    })
    return countWin === 3 ? true : false;
}

function checkDiagonales(idHorizontal, idVertical) {
    let countWin = 0;
    if ( celdas[0].innerHTML !== '' && celdas[0].innerHTML === celdas[4].innerHTML && celdas[4].innerHTML === celdas[8].innerHTML ||
        celdas[2].innerHTML !== '' && celdas[2].innerHTML === celdas[4].innerHTML && celdas[4].innerHTML === celdas[6].innerHTML ) {
            alert('Has ganado')
            return true;
        }
}

//Crear objeto jugador
const player1 = jugador1;
let player2 = jugador2;
let count = 0;

let playerActive = player1;

// Modificar celdas
function checkCelda(event) {
    if ( !event.target.innerHTML ) {
        event.target.innerHTML = playerActive.symbol;
        checkIfWin(event.target.dataset.horizontal, event.target.dataset.vertical);
        playerActive = playerActive === player1 ? player2 : player1;
        count++;
        if ( !playerActive.isHuman ) {
            turnoMaquina();
            count++;
        }
    }
}

//Turno del pc

function getRandom() {
    return Math.floor(Math.random()*(8+1));
}

function turnoMaquina() {
    let n = getRandom();
    if (!celdas[n].innerHTML){
        celdas[n].innerHTML = playerActive.symbol;
        playerActive = playerActive === player1 ? player2 : player1;
    } else {
        turnoMaquina();
    }
}


//Botón Reiniciar

function reinitMethod() {
    const containerSelected = document.querySelector(`#${container}`).innerHTML = '';
    crearTablero();
}