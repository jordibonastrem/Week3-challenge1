import Personaje from "./got/Personajes.js";
import Rey from "./got/Rey.js";
import Assesor from "./got/Assesor.js";
import Luchador from "./got/Luchador.js";
import Escudero from "./got/Escudero.js";
import Page from "./Page.js";

// const card = document.getElementsByClassName("character col");
// const cln = card[0].cloneNode(true);
// const bloqueFichas = document.getElementsByClassName(
//   "characters-list row list-unstyled"
// );
// bloqueFichas[0].appendChild(cln);

const joffrey = new Rey("Joffrey", Personaje.familia.LANNISTER, true, 15);
const jamie = new Luchador(
  "Jamie",
  Personaje.familia.LANNISTER,
  true,
  Luchador.destreza[4],
  "gold hand"
);
const daenerys = new Luchador(
  "Jamie",
  Personaje.familia.TARGARYEN,
  true,
  Luchador.destreza[4],
  "gold hand"
);
const tyrion = new Assesor(
  "Tyrion",
  Personaje.familia.TARGARYEN,
  true,
  Assesor.personajeAlQueAssesoraL
);

// const bronn = new Escudero("Bronn", Personaje.familia.TARGARYEN, true, jamie);
// const characters = [joffrey, jamie, daenerys, tyrion, bronn];

// const addCharacterName = (personaje) => {
//   const characterName = document.querySelector(".character__name");
//   characterName.textContent = `${personaje.nombre} ${personaje.familia}`;
// };

// addCharacterName(joffrey);

// c = new Component("character col", "card character__card", "div");
const p = new Page();
