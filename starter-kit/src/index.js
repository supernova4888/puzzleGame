import "./styles.scss";
import { sum } from "./utils";

const para = document.createElement("p");
para.textContent = `Hello World, 2 + 5 = ${sum(2, 5)}`;

document.body.append(para);
