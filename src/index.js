import "./styles.scss";
import PicturePuzzle from "./PicturePuzzle";
import imageUrl from "./image/icecream.jpeg";
import TemplateGrid from "./TemplateGrid";

const picturePuzzle = new PicturePuzzle(
  document.querySelectorAll("#puzzle-wrapper > div")[0],
  imageUrl,
  600
);

const templateGrid = new TemplateGrid(
  document.querySelectorAll("#template-puzzle-wrapper> div")[0],
  600
);

const modal = document.querySelector("#success-modal");
modal.style.display = "block";
