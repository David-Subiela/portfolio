const englishBtn = document.querySelector(".english-btn");
const spanishBtn = document.querySelector(".spanish-btn");
const flechaArriba = document.querySelector(".flecha-arriba");

englishBtn.addEventListener("click", () => {
  location.href = "./index_en.html";
});

spanishBtn.addEventListener("click", () => {
  location.href = "./index.html";
});

flechaArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
