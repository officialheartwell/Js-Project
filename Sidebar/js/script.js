"use strick";

const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeModel = document.querySelector(".btn-close");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("toggle");
  console.log(menu);
});

closeModel.addEventListener("click", function () {
  menu.classList.add("hidden");
  hamburgerMenu.classList.toggle("toggle");
});
