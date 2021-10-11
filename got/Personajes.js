class Personaje {
  serie = "Juego de Tronos";
  nombre;
  static familia = {
    ARRYN: "casa arryn",
    TRULLY: "casa trully",
    TYRELL: "casa tyrell",
    GREYJOY: "casa greyjoy",
    BARATHEON: "casa Baratheon",
    LANNISTER: "casa Lannister",
    TARGARYEN: "casa Targaryen",
    STARK: "casa Stark",
  };

  static tipo = {
    REY: "es el rey",
    LUCHADOR: "es un luchador",
    ASESOR: "es un asesor",
    ESCUDERO: "es un escudero",
  };
  estado = true;
  constructor(nombre, familia, estado) {
    this.nombre = nombre;
    this.familia = familia;
    this.estado = estado;
  }

  comunicar() {
    return "Soy: ";
  }

  morir() {
    this.estado = !this.estado;
  }
}

export default Personaje;
