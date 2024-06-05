

//VALIDACION DE editAlbum, addSongs

function validarEditAlbum() {
    const formulario = document.forms["EditAlbum"];
    const albumTitle = formulario.elements["albumTitle"].value.trim();
    const albumDescription = formulario.elements["albumDescription"].value.trim();
   

    if (albumTitle === "") {
        insertarMensaje(formulario.elements["albumTitle"], "Por favor, ingresa el título del álbum.");
        return false; 

    } else {
        ocultarMensajeError(formulario.elements["albumTitle"]);
        
    }

    if (albumDescription === "") {
        insertarMensaje(formulario.elements["albumDescription"], "Por favor, ingresa una descripción del álbum.");
        return false; 

    }else{ 
        ocultarMensajeError(formulario.elements["albumTitle"]);
    }
     return true
    
}

/////////////////////////////////////////////////////////////////////////////////////////

function insertarMensaje(inputElement, mensaje) {
    ocultarMensajeError(inputElement)
    const mensajeParrafo = document.createElement("p");
    mensajeParrafo.textContent = mensaje;
    mensajeParrafo.classList.add("mensaje-error"); 
    mensajeParrafo.style.color="red"
    mensajeParrafo.re

    
    inputElement.parentNode.insertBefore(mensajeParrafo, inputElement.nextSibling);
}

function ocultarMensajeError(inputElement) {
    const mensajeParrafo = inputElement.nextElementSibling;
    if (mensajeParrafo && mensajeParrafo.classList.contains("mensaje-error")) {
        mensajeParrafo.parentNode.removeChild(mensajeParrafo);
    }
}

function mostrarMensajeError(inputElement, mensaje) {
    ocultarMensajeError(inputElement)
    let mensajeParrafo = inputElement.nextElementSibling;
    if (!mensajeParrafo || !mensajeParrafo.classList.contains("mensaje-error")) {
        mensajeParrafo = document.createElement("p");
        mensajeParrafo.classList.add("mensaje-error"); 
        inputElement.parentNode.insertBefore(mensajeParrafo, inputElement.nextSibling);
        mensajeParrafo.style.color="red"
    }
    mensajeParrafo.textContent = mensaje;
    
}

function ocultarMensajeError(inputElement) {
    const mensajeParrafo = inputElement.nextElementSibling;
    if (mensajeParrafo && mensajeParrafo.classList.contains("mensaje-error")) {
        mensajeParrafo.parentNode.removeChild(mensajeParrafo);
    }
}

