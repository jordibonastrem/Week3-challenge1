class Personaje {
  serie = "Juego de Tronos";
  nombre;
  edad;
  familia;
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
  constructor(nombre, familia, edad, estado) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }

  comunicar() {
    return "Soy: ";
  }

  morir() {
    this.estado = !this.estado;
  }

  createHtml() {}
}

export default Personaje;
