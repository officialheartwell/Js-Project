"use strick";
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");


hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("toggle");
  console.log(menu, hamburger);
});
