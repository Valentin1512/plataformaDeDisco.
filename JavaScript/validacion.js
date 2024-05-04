

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



function validarAddSong() {
    const formulario = document.forms["AddSong"];
    const songTitle = formulario.elements["songTitle"].value.trim();
    const artistName = formulario.elements["artistName"].value.trim();

    if (songTitle === "") {
        mostrarMensajeError(formulario.elements["songTitle"], "Por favor, ingresa el título de la canción.");
        return false; 
    } else {
        ocultarMensajeError(formulario.elements["songTitle"]);
    }

    if (artistName === "") {
        mostrarMensajeError(formulario.elements["artistName"], "Por favor, ingresa el nombre del artista.");
        return false; 
    } else {
        ocultarMensajeError(formulario.elements["artistName"]);
    }
    swal("¡Éxito!", "¡La validación fue exitosa!", "success");
    
    
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













































/*
function validarFormulario(nombreFormulario) {
    const formulario = document.forms[nombreFormulario];
    const campos = formulario.elements;

    switch (nombreFormulario) {
        case "login":
            // Validación para el formulario de inicio de sesión
            if (campos["Username"].value.trim() === "" || campos["password"].value.trim() === "") {
                alert("Por favor, ingresa tanto el nombre de usuario como la contraseña.");
                return false; // Detener el envío del formulario
            }
            break;
        case "editAlbum":
            // Validación para el formulario de edición de álbumes
            if (campos["albumTitle"].value.trim() === "" || campos["albumDescription"].value.trim() === "") {
                alert("Por favor, completa tanto el título del álbum como la descripción.");
                return false; // Detener el envío del formulario
            }
            break;
        case "addSongs":
            // Validación para el formulario de agregación de canciones
            if (campos["songTitle"].value.trim() === "" || campos["artistName"].value.trim() === "") {
                alert("Por favor, ingresa tanto el título de la canción como el nombre del artista.");
                return false; // Detener el envío del formulario
            }
            break;
        default:
            console.error("Nombre de formulario no reconocido:", nombreFormulario);
            return false; // Detener el envío del formulario por seguridad
    }

    // Si llega aquí, todas las validaciones pasaron
    return true; // Permitir el envío del formulario


*/ 