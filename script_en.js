const englishBtn = document.querySelector(".english-btn");
const spanishBtn = document.querySelector(".spanish-btn");
const flechaArriba = document.querySelector(".flecha-arriba");
const flechaAbajo = document.querySelector(".flecha-abajo");
const skillsContainer = document.querySelector(".row-skills");
const listItems = document.querySelectorAll(".list-items");

const typedEn = new Typed(".typed_en", {
  strings: [
    "<strong>Software Developer</strong>",
    "<strong>Web Development Master's Student</strong>",
    "<strong>Coffee Drinker</strong>",
    "<strong>Self-learner</strong>",
  ],
  //stringsElement: "#wrapper-down", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en milisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitando
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
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

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    flechaArriba.style.display = "none";
  } else {
    flechaArriba.style.display = "block";
  }
  flechaArriba.hidden = this.scrollY < document.documentElement.clientHeight;
});

flechaAbajo.addEventListener("click", () => {
  window.scrollTo({
    top: 670,
    behavior: "smooth",
  });
});

// Skill section Intersection Observer
const skillObserver = new IntersectionObserver((entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    listItems.forEach((list) => list.classList.add("slide"));
    console.log("ver animación");
  } else {
    listItems.forEach((list) => list.classList.remove("slide"));
    console.log("ocultar animación");
  }
});
skillObserver.observe(skillsContainer);
