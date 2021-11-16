import "./styles.css";
import { gameOfLife } from "./gameOfLife";

const gameWrapper1 = document.createElement("div");
const gameWrapper2 = document.createElement("div");

document.body.appendChild(gameWrapper1);
document.body.appendChild(gameWrapper2);

gameOfLife(gameWrapper1);
gameOfLife(gameWrapper2);
