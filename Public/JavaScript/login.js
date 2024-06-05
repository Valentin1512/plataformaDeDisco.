document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const contrasenia = document.getElementById("contrasenia").value;

    try {
        const response = await axios.post("/users/login", { email, contrasenia });

        if (response.status === 200) {
            Swal.fire("Éxito!", "Inicio de sesión correcto!!", "success");
            // Redirigir a la página de inicio después del inicio de sesión exitoso
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        Swal.fire("Error!", "Correo o contraseña incorrectos, intente nuevamente!!", "error");
    }
});

