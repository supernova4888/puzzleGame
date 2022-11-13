export default class CommonCell {
  constructor(puzzle, ind) {
    this.index = ind;

    this.puzzle = puzzle;
    this.width = this.puzzle.width / this.puzzle.dimension;
    this.height = this.puzzle.height / this.puzzle.dimension;

    console.log("this puzzle dimension", this.puzzle.dimension);

    this.el = this.createDiv();
    puzzle.el.appendChild(this.el);
  }

  createDiv() {
    const div = document.createElement("div");

    div.style.backgroundColor = "#c2ba3c";
    div.style.border = "1px solid #0a0a0a";
    div.style.display = "inline-block";

    div.style.width = "200px";
    div.style.height = "200px";

    div.setAttribute("id", "common-cell");

    this.dropElem(div);

    div.onclick = () => {
      console.log("div was clicked", div);
      const currentCellIndex = this.puzzle.findPosition(this.index);
      console.log("this is -->", currentCellIndex);

      const { x, y } = this.getXY(currentCellIndex);
      console.log("this X and Y ", x, y);
    };

    return div;
  }

  // droppable methods

  dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  dragLeave(e) {
    e.target.classList.remove("drag-over");
  }

  drop(e) {
    e.target.classList.remove("drag-over");

    // get the draggable element
    const id = e.dataTransfer.getData("text/plain");
    console.log("this is id ----", id);
    const draggable = document.getElementById(id);
    console.log("this is draggable ----", draggable);

    // add it to the drop target
    draggable.parentNode.removeChild(draggable);
    e.target.appendChild(draggable);
    console.log("this is e.target", e.target);
  }

  dropElem(elem) {
    elem.addEventListener("dragenter", this.dragEnter);
    elem.addEventListener("dragover", this.dragOver);
    elem.addEventListener("dragleave", this.dragLeave);
    elem.addEventListener("drop", this.drop);
  }

  // END DROPPABLE METHODS

  getXY(index) {
    return {
      x: index % this.puzzle.dimension,
      y: Math.floor(index / this.puzzle.dimension),
    };
  }
}
