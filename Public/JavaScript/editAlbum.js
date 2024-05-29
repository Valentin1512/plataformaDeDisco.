document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');
    if (albumId) {
        // Cargar los detalles del álbum para editar
        cargarAlbum(albumId);
    }

    const form = document.getElementById('formulario');
    form.onsubmit = async (event) => {
        event.preventDefault();
        await actualizarAlbum(albumId);
    };
});

async function cargarAlbum(albumId) {
    try {
        const response = await axios.get(`/albums/album/${albumId}`);
        const album = response.data;

        document.getElementById('albumId').value = album._id
        document.getElementById('titulo').value = album.titulo
        document.getElementById('anio').value = album.anio
        document.getElementById('descripcion').value = album.descripcion
        document.getElementById('albumUrl').value = album.portada ? album.portada : 'https://i.imgur.com/0uSALUr.jpeg'; // Si no hay URL de imagen, se asigna la imagen por defecto
    } catch (error) {
        console.error('Error loading album details', error);
        swal("Error", "Hubo un problema al cargar los detalles del álbum", "error");
    }
}

async function actualizarAlbum(albumId) {
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    let portada = document.getElementById('albumUrl').value; // Obtener la URL de la imagen
    let anio = document.getElementById('anio').value;
   

    try {
        const response = await axios.put(`/albums/album/${albumId}`, { titulo, descripcion, portada, anio });
        if (response.status === 200) {
            swal("¡Éxito!", "Álbum actualizado correctamente", "success").then(() => {
                window.location.href = 'album.html';
            });
        }
    } catch (error) {
        console.error('Error updating album', error);
        swal("Error", "Hubo un problema al actualizar el álbum", "error");
    }
}

function cancelEdit() {
    window.location.href = 'album.html';
}
