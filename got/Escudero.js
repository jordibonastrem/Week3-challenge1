import Personaje from "./Personajes.js";

class Escudero extends Personaje {
  static gradoPelotismo = {
    0: "grado 0",
    1: "grado 1",
    2: "grado 2",
    3: "grado 3",
    4: "grado 4",
    5: "grado 5",
    6: "grado 6",
    7: "grado 7",
    8: "grado 8",
    9: "grado 9",
    10: "grado 10",
  };
  constructor(nombre, familia, estado, personajeAlQueSirve, gradoPelotismo) {
    super(nombre, familia, estado);
    this.personajeAlQueSirve = personajeAlQueSirve;
    this.gradoPelotismo = gradoPelotismo;
  }

  comunicar() {
    return super.comunicar() + " soy un loser.";
  }
}
export default Escudero;
