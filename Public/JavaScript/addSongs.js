document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('albumId'); 
    if (!albumId) {
        console.error('Album ID is missing in URL');
        return;
    }

    const form = document.getElementById('addSongForm');
    form.onsubmit = async (event) => {
        event.preventDefault();

        const titulo = form.elements['titulo'].value;
        const artista = form.elements['artista'].value;
        const duracion = form.elements['duracion'].value;
        const url = form.elements['url'].value;

        try {
            const response = await axios.post(`/albums/album/${albumId}/addSong`, { titulo, artista, duracion, url });
            if (response.status === 200) {
                swal("¡Éxito!", "Canción agregada correctamente", "success").then(() => {
                    window.location.href = `vistaDeUnAlbum.html?id=${albumId}`;
                });
            }
        } catch (error) {
            console.error('Error adding song to album', error);
            swal("Error", "Hubo un problema al añadir la canción", "error");
        }
    };
    document.getElementById('cancelar').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'album.html';
      });
});






























