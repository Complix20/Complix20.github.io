document.addEventListener("DOMContentLoaded", () => {
  const mensajeBtn = document.querySelector(".btn--yes");
  const mensajeBox = document.querySelector(".mensaje-box");
  const mensajeText = document.querySelector(".mensaje-text");

  mensajeBtn.addEventListener("click", () => {
    mensajeText.textContent = "¡Espero que tengas un día hermoso! Te lo mereces muchísimo, eres una gran persona y en realidad cada vez que te voy conociendo mas, me doy cuenta lo increible y bien que se siente estar a tu lado, una vez mas pasalo bello y espero te guste el pequeño detalle :D  ❤️🎉🎂";
    mensajeBox.classList.remove("hidden");
    confetti();
  });
});
