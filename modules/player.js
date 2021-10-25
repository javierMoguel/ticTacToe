class player {
  constructor(id) {
    this.id = Number(id);
    this.playerInfo = this.createPlayer();
  }

  createPlayer() {
    return {
      isHuman: this.id !== 3 ? true : false,
      symbol: this.id !== 1 ? "O" : "X",
    };
  }

  drawCelda(event) {
    if (!event.target.innerHTML) {
      event.target.innerHTML = this.playerInfo.symbol;
    }
  }


}

export default player;
