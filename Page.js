class Page{
    element;
    parentElement;

  constructor(parentElement, className, htmlTag = "div"){
        this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.parentElement = parentElement;

    this.parentElement.append(this.element);
    this.generateHTML();
  }

  generateHTML() {
    const html = `<div class="card character__card">
            <img
              src=""
              alt=""
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">
                Nombre y Familia
              </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad:</li>
                  <li>
                    Estado:Vivo
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado:</li>
                  <li>Arma:</li>
                  <li>Destreza:</li>
                  <li>Peloteo:</li>
                  <li>Asesora a:</li>
                  <li>Sirve a:</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button
                    type="button"
                 
                    
                    class="character__action btn"
                  >
                    muere
                  </button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
    this.element.innerHTML = html;

}