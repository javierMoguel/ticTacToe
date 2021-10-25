class weHaveAWinner {
  constructor() {
    this.celdas;
    this.count = 0;
    this.symbol;
  }

  checkIfWin(horizontal, vertical, symbol) {
    this.symbol = symbol;
    this.celdas = document.querySelectorAll("td");
    if (this.checkHorizontal(horizontal)) {
      this.weHaveAWinner(true);
      return true;
    } else if (this.checkVertical(vertical)) {
      this.weHaveAWinner(true);
      return true;
    } else if (this.checkDiagonales()) {
      this.weHaveAWinner(true);
      return true;
    }
    this.count++;
    if (this.count === 9) {
      this.weHaveAWinner(false);
    }
  }

  checkHorizontal(idHorizontal) {
    let countWin = 0;
    this.celdas.forEach((res) => {
      if (
        res.dataset.horizontal === idHorizontal &&
        res.innerHTML === this.symbol
      ) {
        countWin++;
      }
    });
    return countWin === 3 ? true : false;
  }

  checkVertical(idVertical) {
    let countWin = 0;
    this.celdas.forEach((res) => {
      if (
        res.dataset.vertical === idVertical &&
        res.innerHTML === this.symbol
      ) {
        countWin++;
      }
    });
    return countWin === 3 ? true : false;
  }

  checkDiagonales() {
    if (
      (this.celdas[0].innerHTML !== "" &&
        this.celdas[0].innerHTML === this.celdas[4].innerHTML &&
        this.celdas[4].innerHTML === this.celdas[8].innerHTML) ||
      (this.celdas[2].innerHTML !== "" &&
        this.celdas[2].innerHTML === this.celdas[4].innerHTML &&
        this.celdas[4].innerHTML === this.celdas[6].innerHTML)
    ) {
      return true;
    }
  }

  weHaveAWinner(winner) {
    winner
      ? alert(`El jugador que controla ${this.symbol} ha ganado`)
      : alert(`Tablas`);
  }
}

export default weHaveAWinner;
