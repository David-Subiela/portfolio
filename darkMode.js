/* CREAR DARK MODE*/

let btnDark = document.getElementById("dark-mode");
let btnLight = document.getElementById("light-mode");
let body = document.getElementsByTagName("body");

btnLight.style.display = "none";

btnDark.addEventListener("click", () => {
  btnDark.style.display = "none";
  btnLight.style.display = "block";
  body[0].classList.add("dark");
  localStorage.setItem("ModoOscuro", true); // Se guarda el modo oscuro en true
});
btnLight.addEventListener("click", () => {
  btnDark.style.display = "block";
  btnLight.style.display = "none";
  body[0].classList.remove("dark");
  localStorage.setItem("ModoOscuro", false); // Se guarda el modo claro en false
});

let modos = localStorage.getItem("ModoOscuro"); // Carga la info

if (modos === "true") {
  body[0].classList.add("dark");
} else {
  body[0].classList.remove("dark");
}
