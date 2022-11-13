export default class ImgCell {
  constructor(puzzle, ind) {
    // no need
    this.isEmpty = false;
    this.index = ind;

    // div banana
    this.puzzle = puzzle;
    this.width = this.puzzle.width / this.puzzle.dimension;
    this.height = this.puzzle.height / this.puzzle.dimension;

    // COMMON
    // // image Div
    this.el = this.createDiv();
    // puzzle is the divWrapper under the puzzle (PARENT)

    // unique to rack - as it appends to banana
    puzzle.el.appendChild(this.el);

    this.setImage();
    this.setPosition(this.index);
  }

  createDiv() {
    const div2 = document.createElement("div");

    div2.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
    div2.style.border = "1px solid #0a0a0a";
    div2.style.position = "absolute";

    div2.setAttribute("id", "img-cell");

    div2.setAttribute("draggable", true);

    this.dragElem(div2);

    return div2;
  }

  dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log("e.e.target.id ---->", e.target.id);
    // OMG, the data is here now :)
    // setTimeout(() => {
    //   e.target.classList.add("hide");
    // }, 0);
  }

  dragElem(elem) {
    elem.addEventListener("dragstart", this.dragStart);
  }

  // unique to rack
  setImage() {
    const { x, y } = this.getXY(this.index);
    const left = this.width * x;
    const top = this.height * y;

    this.el.style.width = `${this.width}px`;
    this.el.style.height = `${this.height}px`;

    this.el.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
    this.el.style.backgroundPosition = `-${left}px -${top}px`;
  }

  setPosition(destinationIndex, animate, currentIndex) {
    const { left, top } = this.getPositionFromIndex(destinationIndex);
    const { left: currentLeft, top: currentTop } =
      this.getPositionFromIndex(currentIndex);

    if (animate) {
      if (left !== currentLeft) {
        this.animate("left", currentLeft, left);
      } else if (top !== currentTop) {
        this.animate("top", currentTop, top);
      }
    } else {
      this.el.style.left = `${left}px`;
      this.el.style.top = `${top}px`;
    }
  }

  // COMMON METHOD
  getPositionFromIndex(index) {
    const { x, y } = this.getXY(index);
    return {
      left: this.width * x,
      top: this.height * y,
    };
  }

  // COMMON METHOD
  getXY(index) {
    return {
      x: index % this.puzzle.dimension,
      y: Math.floor(index / this.puzzle.dimension),
    };
  }
}
