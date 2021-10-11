import Personaje from "./Personajes";

class Luchador extends Personaje {
  tipoArma;
  destreza;
  constructor(nombre, familia, estado, tipoArma, destreza) {
    super(nombre, familia, estado);
    this.tipoArma = tipoArma;
    this.destreza = destreza;
  }

  comunicar() {
    return super.comunicar() + " primero pego y luego pregunto";
  }
}
export default Luchador