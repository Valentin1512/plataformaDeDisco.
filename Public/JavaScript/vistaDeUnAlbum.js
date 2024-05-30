document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');

    if (!albumId) {
        console.error('Album ID is missing in URL');
        swal("Error", "Album ID is missing in URL", "error");
        return;
    }

    try {
        const albumResponse = await axios.get(`/albums/album/${albumId}`);
        const album = albumResponse.data;
        const albumDetails = document.getElementById('albumDetails');

        if (!albumDetails) {
            console.error('albumDetails element not found');
            swal("Error", "No se encontró el contenedor de detalles del álbum", "error");
            return;
        }

        albumDetails.innerHTML = `
            <div class="text-center text-4xl text-fuchsia-500">Detalles del Álbum</div>
            <div class="text-center mt-5">
                <img src="${album.portada ? album.portada : 'https://i.imgur.com/0uSALUr.jpeg'}" alt="Portada del álbum" class="mx-auto mb-4 rounded" style="width: 250px; height: 250px;">
                <h3 class="text-sky-200 text-5xl font-bold mb-2">${album.titulo}</h3>
                <p class="text-4xl text-white  mb-2">Año de lanzamiento: ${album.anio}</p>
                <p class="text-teal-400 text-3xl flex-row">${album.descripcion}</p>
            </div>
        `;
        
        const songsListContainer = document.getElementById('songListContainer');
        songsListContainer.innerHTML = ''; // Limpiar la lista de canciones antes de agregar las nuevas

        album.cancion.forEach((cancion, index) => {
            const li = document.createElement('li');
            li.classList.add('border', 'border-gray-200', 'p-4', 'mb-4', 'rounded', 'flex', 'items-center', 'justify-between');
            li.dataset.songindex = index; // Añadir el índice como un atributo de datos en el <li>
            
            li.innerHTML = `
                <div>
                    <h3 class="text-black text-3xl pb-3">${cancion.titulo}</h3>
                    <p>Artista: ${cancion.artista}</p>
                    <p>Duración: ${cancion.duracion}</p>
                    <audio controls class="mr-4">
                        <source src="${cancion.url}" type="audio/mpeg">
                    </audio>
                    <button class="btn-delete-song text-red-500 hover:text-red-700" data-albumid="${album._id}" data-songindex="${index}">Eliminar</button>
                </div>
            `;

            songsListContainer.appendChild(li);
        });

    } catch (error) {
        console.error('Error loading details', error);
        swal("Error", "Hubo un problema al obtener los detalles", "error");
    }

    // Agrego un listener de eventos a los botones de eliminar canción
    document.addEventListener('click', async (event) => {
        if (event.target.classList.contains('btn-delete-song')) {
            const albumId = event.target.getAttribute('data-albumid');
            const songIndex = event.target.getAttribute('data-songindex');
            const songItem = event.target.closest('li'); // Seleccionar el <li> contenedor más cercano

            try {
                // Envío una solicitud DELETE al servidor
                const response = await axios.delete(`/albums/album/${albumId}/deleteSong/${songIndex}`);

                // Si la solicitud fue exitosa, elimina el <li> correspondiente
                if (response.status === 200) {
                    songItem.remove(); // Eliminar solo el <li> de la canción eliminada
                    swal("Éxito", "La canción ha sido eliminada correctamente", "success");
                } else {
                    swal("Error", "Hubo un problema al eliminar la canción", "error");
                }
            } catch (error) {
                console.error('Error deleting song', error);
                swal("Error", "Hubo un problema al eliminar la canción", "error");
            }
        }
    });
});
