class Page {
  mainDiv;
  personajes;
  comunications;
  list;

  constructor() {
    this.createMainDiv();
    this.createList();
  }

  createMainDiv() {
    this.mainDiv = document.createElement("div");
    this.mainDiv.className = "app container";
    document.body.append(this.mainDiv);
  }

  createList() {
    this.list = document.createElement("ul");
    this.list.className = "characters-list row list-unstyledr";
    this.mainDiv.appendChild(this.list);
  }

  createComunications() {
    this.comunications = document.createElement("div");
    this.comunications.className = "comunications";
    document.body.appendChild(this.comunications);
  }
}
