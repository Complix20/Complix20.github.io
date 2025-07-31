document.addEventListener("DOMContentLoaded", () => {
  const btnYes = document.querySelector(".btn--yes");
  const btnNo = document.querySelector(".btn--no");
  const mensajeBox = document.querySelector(".mensaje-box");
  const mensajeText = document.querySelector(".mensaje-text");

  btnYes.addEventListener("click", () => {
  mensajeText.textContent = "Ahora todo es felicidad 😋🎉";
  mensajeBox.classList.remove("hidden");
  document.querySelector(".buttons").classList.add("hidden"); 
  confetti();
});


  btnNo.addEventListener("mouseover", () => {
    const container = document.querySelector(".container");
    const maxX = container.offsetWidth - btnNo.offsetWidth;
    const maxY = container.offsetHeight - btnNo.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.position = "absolute";
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
  });
});
