"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

// Event Listeners
yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("mouseover", () => {
  if (noCount >= MAX_IMAGES) {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
});

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    
    if (noCount === MAX_IMAGES) {
      play = false;
      noButton.style.transform = "translate(0, 0)";
    }
  }
});

// Funciones
function handleYesClick() {
  // Mostrar mensaje y ocultar botones
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");

  // Cambiar la imagen a la de "sí"
  changeImage("yes");

  // Lanzar confetti
  triggerConfetti();
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const newFontSize = parseFloat(computedStyle.fontSize) * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Estas segura?",
    "Porfis :c",
    "Voy a llorar :(",
    "Me voy a morir",
    "Enserio moriré....",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  catImg.src = `images/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.textContent = generateMessage(noCount);
}

function triggerConfetti() {
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
