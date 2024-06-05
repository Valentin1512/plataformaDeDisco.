document.getElementById('logout').addEventListener('click', async function(event) {
    event.preventDefault();

    try {
        await axios.post('/users/logout');
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
});

document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await axios.get('/users/me');
        const userData = response.data;
        const userNameElement = document.querySelector('.sidebar h2');
        userNameElement.textContent = `${userData.nombre} ${userData.apellido}`;
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        window.location.href = 'login.html';
    }
});