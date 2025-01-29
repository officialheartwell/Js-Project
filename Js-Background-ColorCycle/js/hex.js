"use strick";
//!selection Element
const btnBotton = document.querySelector("#buttons");
const btnSolid = document.querySelector(".btn-solid");
const btnGradient = document.querySelector(".btn-gradient");
const colorValue = document.querySelector(".code");

btnBotton.style.background = "-40px";

//button transition smoothly
function style() {
  btnBotton.style.transform = "translateY(20px)";
  btnBotton.style.transition = "600ms";
}

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btnSolid.addEventListener("click", () => {
  style();
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randonNum()];
  }
  document.body.style.background = hexColor;
  colorValue.textContent = hexColor;
  console.log(hexColor);
});

function randonNum() {
  return Math.trunc(Math.random() * hex.length);
}

btnGradient.addEventListener("click", () => {
  style();
  let hexColorOne = "#";
  let hexColorTwo = "#";
  for (let i = 0; i < 6; i++) {
    hexColorOne += hex[randonNum()];
    hexColorTwo += hex[randonNum()];
  }
  document.body.style.background = `linear-gradient(45deg, ${hexColorOne}, ${hexColorTwo})`;
  colorValue.textContent = `${hexColorOne}, ${hexColorTwo}`;
});
