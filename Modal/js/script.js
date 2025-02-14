"use strick";
const openModal = document.getElementById("open-modal");
const overlayContent = document.getElementById("content-overlay");
const overlay = document.getElementById("overlay");
const closeModal = document.querySelector(".button-close");

function toggleModal() {
  overlayContent.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
