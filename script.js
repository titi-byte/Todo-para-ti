function showLetter() {
  document.querySelector(".heart-container").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".heart-container").style.display = "none";
    document.getElementById("letter-container").classList.add("active");
    document.body.classList.remove("no-scroll"); // Habilita el scroll
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  const background = document.createElement("div");
  background.classList.add("background-hearts");
  document.body.appendChild(background);

  for (let i = 0; i < 150; i++) {
    let heart = document.createElement("svg");
    heart.classList.add("heart-bg");
    heart.setAttribute("viewBox", "0 0 512 512");
    heart.innerHTML = `<path d="M256 464s-184-128-184-272C72 104 120 56 176 56c36 0 72 22 80 64 8-42 44-64 80-64 56 0 104 48 104 136 0 144-184 272-184 272z"/>`;

    heart.style.top = Math.random() * 100 + "%";
    heart.style.left = Math.random() * 100 + "%";

    let scale = Math.random() * 0.7 + 0.3;
    heart.style.transform = `scale(${scale})`;

    background.appendChild(heart);
  }
});
document
  .querySelector(".heart-container")
  .addEventListener("click", function () {
    document.body.classList.toggle("scroll-active");
  });
document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("musica");

  // Intenta reproducir la música
  var playMusic = () => {
    audio.play().catch((error) => {
      console.log("Reproducción bloqueada por el navegador.");
    });
  };
  document.body.addEventListener("click", playMusic, { once: true });
  document.body.addEventListener("touchstart", playMusic, { once: true });
});
