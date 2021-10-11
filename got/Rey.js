import Personaje from "./Personajes";

class Rey extends Personaje {
  agnosReinado;
  constructor(nombre, familia, estado, agnosReinado) {
    super(nombre, familia, estado);
    this.agnosReinado = agnosReinado;
  }

  comunicar() {
    return super.comunicar() + " vais a morir todos";
  }
}

export default Rey;
