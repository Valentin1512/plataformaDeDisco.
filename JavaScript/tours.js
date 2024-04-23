/*let nombreUsuario = prompt("Cual es tu nombre?")
let edad = parseInt(prompt("Cual es tu edad?"))

alert("Hola " + nombre + " de " + edad + " años " + " te interesaría adquirir tickects ? 🎟️'")
//////////////////////////////////////////////////////////////////////////////////////////////////////
*/

// DOM en la parte de tours

let nombre = prompt("Cuál es tu nombre?");
const span = document.querySelector("#welcome");

if (nombre.length < 2) {
  nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
}
span.textContent = "Hola, " + nombre;


/*
let nombre = prompt("Cuál es tu nombre?").toUpperCase();
while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
  ).toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket"); */
