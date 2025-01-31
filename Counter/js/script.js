"use strick";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

counter = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      display.style.color = "green";
    } else if (counter < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "black";
    }
    display.textContent = counter;
  });
});
