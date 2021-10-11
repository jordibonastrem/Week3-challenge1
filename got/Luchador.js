import Personaje from "./Personajes.js";

class Luchador extends Personaje {
  tipoArma;
  static destreza = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
  };
  constructor(nombre, familia, estado, tipoArma, destreza) {
    super(nombre, familia, estado);
    this.tipoArma = tipoArma;
    this.destreza = destreza;
  }

  comunicar() {
    return super.comunicar() + " primero pego y luego pregunto";
  }
}
export default Luchador;
