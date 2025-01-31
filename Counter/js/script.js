"use strick";
const display = document.querySelector(".display");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

counter = 0;

//Decrease the counter
decrease.addEventListener("click", function () {
  counter--;
  display.textContent = counter;
  if (counter < 0) {
    display.style.color = "red";
  } else if (counter === 0) {
    display.style.color = "black";
  }
});

//reset the counter
reset.addEventListener("click", function () {
  counter = 0;
  display.textContent = counter;
  if (counter === 0) {
    display.style.color = "black";
  }
});

//increase the counter
increase.addEventListener("click", function () {
  counter++;
  display.textContent = counter;
  if (counter > 0) {
    display.style.color = "green";
  }else if (counter === 0) {
    display.style.color = "black";
  }
});

//? Selecting the display counter property to manipulate
// const buttons = document.querySelectorAll(".btn");


//!Using For Loop
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     if (buttons[i].classList.contains("decrease")) {
//       counter--;
//     } else if (buttons[i].classList.contains("increase")) {
//       counter++;
//     } else {
//       counter = 0;
//     }

//     //change the color mode
//     if (counter > 0) {
//       display.style.color = "green";
//     } else if (counter < 0) {
//       display.style.color = "red";
//     } else {
//       display.style.color = "black";
//     }

//     display.textContent = counter;
//   });
// }


//* Using ForEach()
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       counter--;
//     } else if (styles.contains("increase")) {
//       counter++;
//     } else {
//       counter = 0;
//     }

//!add color to each button mode
//     if (counter > 0) {
//       display.style.color = "green";
//     } else if (counter < 0) {
//       display.style.color = "red";
//     } else {
//       display.style.color = "black";
//     }
//     display.textContent = counter;
//   });
// });
