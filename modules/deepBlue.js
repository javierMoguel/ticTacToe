
  function getRandom() {
    return Math.floor(Math.random() * (8 + 1));
  }

  function turnoMaquina( symbol = 'O' ) {
    let n = getRandom();
    const celdas =  document.querySelectorAll("td");

    if (!celdas[n].innerHTML) {
      celdas[n].innerHTML = symbol;
    } else {
      turnoMaquina();
    }
    return celdas[n];
  }

  export {turnoMaquina};
