

async function fetchAlbums() {
    try {
        const response = await axios.get('/albums/album');
        const albums = response.data;
        const albumsList = document.getElementById('albumsList');

    swal("Exito!", "Se cargaron los albums correctamente", "success");
    
  
        // Limpiar la lista de álbumes existente
        albumsList.innerHTML = '';
  
        albumsList.classList.add('flex','flex-wrap', 'justify-center', 'items-center');
  
        // Iterar sobre la lista de álbumes y agregarlos al DOM
        albums.forEach(album => {
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album-item','shadow-violet-950','m-5', 'p-5','border-4','border-fuchsia-500', 'bg-gray-200', 'rounded', 'shadow-lg', 'text-center', 'w-64');
  
            const albumImage = document.createElement('img');
            albumImage.style.width = '250px';
            albumImage.style.height = '250px';
            albumImage.classList.add('mx-auto', 'mb-4', 'rounded');
            albumImage.src = album.portada ? album.portada : 'https://i.imgur.com/0uSALUr.jpeg'; // Si no hay URL de imagen, se asigna la imagen por defecto
  
            const albumTitle = document.createElement('h3');
            albumTitle.innerText = album.titulo;
            albumTitle.classList.add('text-2xl', 'font-bold', 'mb-2');
  
            const albumYear = document.createElement('p');
            albumYear.innerText = `Año de lanzamiento: ${album.anio}`;
            albumYear.classList.add('text-xl', 'mb-2');
  
            const albumDescription = document.createElement('p');
            albumDescription.innerText = album.descripcion;
            albumDescription.classList.add('text-lg','flex-row',);
  
            const editButton = document.createElement('button');
            editButton.innerText = 'Editar';
            editButton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'mt-4');
            editButton.onclick = () => window.location.href = `editAlbum.html?id=${album._id}`;
  
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Eliminar';
            deleteButton.classList.add('bg-red-500', 'text-white', 'px-4', 'py-2', 'rounded', 'mt-4');
            deleteButton.onclick = () => deleteAlbum(album._id);
  
            const vistaDelAlbum = document.createElement('button')
            vistaDelAlbum.innerText = 'Vista del album';
            vistaDelAlbum.classList.add('bg-lime-500', 'text-white', 'px-4', 'py-2', 'rounded', 'mt-4');
            vistaDelAlbum.onclick = () => window.location.href = `vistaDeUnAlbum.html?id=${album._id}`;

            const addSongButton = document.createElement('button');
            addSongButton.innerText = 'Añadir Canción';
            addSongButton.classList.add('bg-green-500', 'text-white', 'px-4', 'py-2', 'rounded', 'mt-4');
            addSongButton.onclick = () => window.location.href = `addSongs.html?albumId=${album._id}`;

  
            albumDiv.appendChild(albumImage);
            albumDiv.appendChild(albumTitle);
            albumDiv.appendChild(albumYear);
            albumDiv.appendChild(albumDescription);
            albumDiv.appendChild(editButton);
            albumDiv.appendChild(deleteButton);
            albumDiv.appendChild(vistaDelAlbum);
            albumDiv.appendChild(addSongButton);
  
            albumsList.appendChild(albumDiv);
        });
    } catch (error) {
        console.error('Error fetching albums', error);
        swal("Error", "Hubo un problema al obtener los álbumes", "error");
    }
  }
  
  async function deleteAlbum(id) {
    try {
        const response = await axios.delete(`/albums/album/${id}`);
        if (response.status === 200) {
            swal("¡Éxito!", "Álbum eliminado correctamente", "success").then(() => {
                fetchAlbums(); // Refrescar la lista de álbumes después de la eliminación
            });
        }
    } catch (error) {
        console.error('Error deleting album', error);
        swal("Error", "Hubo un problema al eliminar el álbum", "error");
    }
  
    
  }
  
  document.addEventListener('DOMContentLoaded', fetchAlbums);










