import ImgCell from "./ImgCell";

export default class PicturePuzzle {
  constructor(el, imageSrc, width, dimension = 3) {
    // div banana
    this.parentEl = el;
    this.dimension = dimension;
    this.imageSrc = imageSrc;
    this.width = width;
    this.cells = [];
    this.shuffling = false;
    this.numberOfMovements = 0;

    // events
    this.onFinished = () => {};
    this.onSwap = () => {};

    this.init();
    const img = new Image();
    img.onload = () => {
      this.height = (img.height * this.width) / img.width;
      this.el.style.width = `${this.width}px`;
      this.el.style.height = `${this.height}px`;

      this.setup();
    };
    img.src = this.imageSrc;
  }

  // METHODS:

  init() {
    this.el = this.createWrapper();
    this.parentEl.appendChild(this.el);
  }

  createWrapper() {
    const div = document.createElement("div");
    div.style.position = "relative";
    div.style.margin = " 0 auto";
    return div;
  }

  setup() {
    for (let i = 0; i < this.dimension * this.dimension; i++) {
      this.cells.push(new ImgCell(this, i));
    }
    this.shuffle();
  }

  shuffle() {
    this.shuffling = true;
    for (let i = this.cells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      this.swapCells(i, j);
    }
    this.shuffling = false;
  }

  swapCells(i, j, animate) {
    this.cells[i].setPosition(j, animate, i);
    this.cells[j].setPosition(i);
    [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
    if (!this.shuffling && this.isAssembled()) {
      if (this.onFinished && typeof this.onFinished === "function") {
        this.onFinished.call(this);
      }
    }
  }

  findPosition(ind) {
    return this.cells.findIndex((cell) => cell.index === ind);
  }

  findEmpty() {
    return this.cells.findIndex((cell) => cell.isEmpty);
  }
}

window.PicturePuzzle = window.PicturePuzzle || PicturePuzzle;
