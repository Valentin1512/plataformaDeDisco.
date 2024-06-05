


//OBJETO tickets

let tickets = {
  "Buenos Aires": 2,
  "Madrid": 2,
  "Bogota": 2,
  "Montevideo": 3,
  "New York": 2,
  "La paz": 2,
}


//FUNCIONES

function saludar(){
  swal("Bienvenido al apartado de Fechas y Tours!!", nombre, "success");
}

function getTickets(ciudad) {
  while (tickets[ciudad] > 0) {
    swal("Comprado!", "Tienes 1 entrada para el concierto de " + ciudad + 
    " ", "success");
    tickets[ciudad]--;  
    disableSoldOutButtons()
    return; 
   }
   swal(
    "SOLD OUT!",
    "¡Se te acabó la suerte!, no quedan más entradas para el concierto de " + 
    ciudad, "info",)
  }
    



 function disableSoldOutButtons(){
  for (let ciudad in tickets) {
    if (tickets[ciudad] === 0) {
        let boton = document.getElementById(ciudad.replace(/\s+/g, ''));
        if (boton) {
            boton.textContent = "SOLD OUT";
            boton.style.backgroundColor= "grey"
        }
    }
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
      todosLosBotones[i].textContent = "Bloqueado"
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

///////////////////////////////////////////////////////////////////



