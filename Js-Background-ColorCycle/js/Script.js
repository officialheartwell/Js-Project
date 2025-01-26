"use strick";
//!selection Element
const btnBotton = document.querySelector("#buttons");
const btnSolid = document.querySelector(".btn-solid");
const btnGradient = document.querySelector(".btn-gradient");
const colorValue = document.querySelector(".code");
const bkground = document.querySelector("body");

//?Cycle of Colors
const colors = [
  "Crimson",
  "Coral",
  "Teal",
  "Gold",
  "Peru",
  "SlateBlue",
  "Tomato",
  "SpringGreen",
  "Sienna",
  "DodgerBlue",
  "HotPink",
  "MidnightBlue",
  "DarkOrange",
];

const hexCodeValue = [
  "#DC143C",
  "#FF7F50",
  "#008080",
  "#FFD700",
  "#CD853F",
  "#6A5ACD",
  "#FF6347",
  "#00FF7F",
  "#A0522D",
  "#1E90FF",
  "#FF69B4",
  "#191970",
  "#FF8C00",
];

let index = 0;





btnBotton.style.background = "-40px"


//button transition smoothly
function style() {
  btnBotton.style.transform = "translateY(20px)";
  btnBotton.style.transition = "600ms";
}

// Setting the background color to display solid color
function setSolidBackground(color, hex) {
  bkground.style.background = color;
  colorValue.textContent = `${color}: ${hex}`;
}

// setting the backgroud color to a gradient display
function setGradientBackground(randomColor1, randomColor2) {
  bkground.style.background = `linear-gradient(45deg, ${colors[randomColor1]}, ${colors[randomColor2]})`;
  colorValue.textContent = `${colors[randomColor1]} & ${colors[randomColor2]}`;
}

//Event listener for solid colors

btnSolid.addEventListener("click", function () {
  style();
  setSolidBackground(colors[index], hexCodeValue[index]);
  index = (index + 1) % colors.length;
});

// Event listen for gradient colors
btnGradient.addEventListener("click", () => {
  style();
  let randomColor1 = Math.trunc(Math.random() * colors.length);
  let randomColor2 = Math.trunc(Math.random() * colors.length);
  setGradientBackground(randomColor1, randomColor2);
});
