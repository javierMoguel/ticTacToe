import * as defines from './defines.js';

class drawer {
    
    constructor(){}
  crearTablero() {
    const containerSelected = document.querySelector(`#${defines.container}`);
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 3; i++) {
      var hilera = document.createElement("tr");

      for (var j = 0; j < 3; j++) {
        var celda = document.createElement("td");
        celda.setAttribute("data-horizontal", `${i}`);
        celda.setAttribute("data-vertical", `${j}`);
        hilera.appendChild(celda);
      }

      tblBody.appendChild(hilera);
      tabla.appendChild(tblBody);
    }

    containerSelected.appendChild(tblBody);
  }

  reinitMethod() {
    const containerSelected = (document.querySelector(
      `#${defines.container}`
    ).innerHTML = "");
    this.crearTablero();
  }
}

export default drawer;
