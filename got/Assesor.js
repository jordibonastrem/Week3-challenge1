import Personaje from "./Personajes";

class Assesor extends Personaje {
  personajeAlQueAssesora;

  static personajeAlQueAssesora = {
    REY: "assesora al rey",
    LUCHADOR: "assesora a un luchador",
    ASESOR: "assesora a un assesor",
    ESCUDERO: "assesora a un escudero",
  };

  constructor(nombre, familia, estado, personajeAlQueAssesora) {
    super(nombre, familia, estado);
    this.personajeAlQueAssesora = personajeAlQueAssesora;
  }

  comunicar() {
    return (
      super.comunicar() + " no sé por qué, pero creo que voy a morir pronto."
    );
  }
}
