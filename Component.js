class Components {
  list;
  personaje;
  li;

  constructor(personaje, list) {
    this.list = list;
    this.personaje = personaje;
    this.createLi();
    this.createliCardCharacter();
  }

  createLi() {
    this.li = document.createElement("li");
    this.li.className = "character col";
    this.list.appendChild(this.li);
  }

  createliCardCharacter() {
    this.li.innerHTML = `
    <div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.personaje.nombre} ${this.personaje.familia}a</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.personaje.edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-dow"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
    this.list.appendChild(this.li);
  }
}

export default Components;
