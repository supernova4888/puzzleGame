import CommonCell from "./CommonCell";

export default class TemplateGrid {
  constructor(el, width = 600, dimension = 3) {
    this.parentEl = el;
    this.dimension = dimension;
    this.width = width;
    this.cells = [];

    this.init();

    this.setup();
  }

  // METHODS:

  init() {
    this.el = this.createWrapper();
    this.parentEl.appendChild(this.el);
  }

  createWrapper() {
    const div = document.createElement("div");

    // this works, but its hardcoded :(
    div.style.width = "800px";
    div.style.position = "relative";
    // div.style.margin = " 0 auto";
    return div;
  }

  setup() {
    for (let i = 0; i < this.dimension * this.dimension; i++) {
      this.cells.push(new CommonCell(this, i));
    }
  }

  findPosition(ind) {
    return this.cells.findIndex((cell) => cell.index === ind);
  }
}
