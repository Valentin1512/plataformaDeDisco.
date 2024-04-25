
/*let nombreUsuario = prompt("Cual es tu nombre?")
let edad = parseInt(prompt("Cual es tu edad?"))

alert("Hola " + nombre + " de " + edad + " años " + " te interesaría adquirir tickects ? 🎟️'")
//////////////////////////////////////////////////////////////////////////////////////////////////////
*/

//DECLARAR VARIABLES DE CIUDADES
let BuenosAires = "El show de Buenos Aires"
let Bogota = "El show de Bogota"
let Montevideo = "El show de Montevideo"
let NewYork = "El show de New York"
let laPaz = "El show de la Paz"
let madrid = "El show de madrid"

//FUNCIONES

function saludar(){
  swal("Bienvenido al apartado de tickets!!", nombre, "success");
}

let noTickets;

function getTickets(place, noTickets) {
   noTickets = false
  if (noTickets) {
    swal(
      "Oh no!",
      "¡Se te acabó la suerte!, no quedan más entradas para " + 
      place, "info",
    );
  } else {
    swal("Sold!", "Tienes entradas para el " + place + 
    " concert", "success");
  }
 }

 function getTickets2(place, noTickets) {
   noTickets = true
  if (noTickets) {
    swal(
      "Oh no!",
      "¡Se te acabó la suerte!, no quedan más entradas para " + 
      place, "info",
    );
  } else {
    swal("Sold!", "Tienes entradas para el " + place + 
    " concert", "success");
  }
 }

 function edadUsuario(){
  let edad = parseInt(prompt("Ingrese su edad"))
  if(edad <18){
    swal("Edad insuficiente", "sos menor de edad para comprar tickets", "error")
    let todosLosBotones = document.querySelectorAll("button")
    for (let i = 0; i < todosLosBotones.length; i++) {
      todosLosBotones[i].style.backgroundColor= "red"
      todosLosBotones[i].disabled = true
      todosLosBotones[i].textContent = "no tickets"
      }
    
  }else{
    saludar()
  }

  
 }

////////////////////////////////////////////////////////////////////////////////

// DOM en la parte de tours

let nombre = prompt("Cuál es tu nombre?").toUpperCase();


while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
  ).toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = ` Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa-ticket fa-solid fa-ticket fa-lg ");

edadUsuario()














/*let nombre = prompt("Cuál es tu nombre?");
const span = document.querySelector("#welcome");

if (nombre.length < 2) {
  nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
}
span.textContent = "Hola, " + nombre; */