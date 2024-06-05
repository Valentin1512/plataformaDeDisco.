let boton = document.getElementById("enviarBtn");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasenia = document.getElementById("contrasenia");

boton.addEventListener("click", async function(e){
    e.preventDefault();
    try {
        console.log("Enviando datos al servidor...");
        const response = await axios.post("/users/register", {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            contrasenia: contrasenia.value 
        });
        
        console.log("Respuesta del servidor:", response);
        if (response.status === 201) {
            console.log(response.data);
            swal("Éxito!", "Usuario creado correctamente!!", "success");
            // Redirigir a la página de inicio de sesión después del registro exitoso
            window.location.href = 'login.html';
        } else {
            throw new Error('Error en la creación del usuario');
        }
    } catch (error) {
        console.error('Error al registrar al usuario:', error);
        swal("Error!", "No se pudo crear el usuario, intente nuevamente!!", "error");
    }
});
