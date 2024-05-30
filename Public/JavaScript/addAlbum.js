document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addAlbumForm').addEventListener('submit', async function (e) {
      e.preventDefault();
  
      const titulo = document.getElementById('titulo').value;
      const anio = document.getElementById('anio').value;
      const descripcion = document.getElementById('descripcion').value;
      const portada = document.getElementById('imagen').value;
  
      try {
        const response = await axios.post('/albums/album', {
          titulo,
          descripcion,
          anio,
          portada
        });
  
        if (response.status === 201) {
          swal("¡Éxito!", "Álbum añadido correctamente", "success").then(() => {
            window.location.href = 'album.html';
          });
        }

      } catch (error) {
        console.error('Error al añadir el álbum:', error);
        swal("Error", "Hubo un problema al añadir el álbum, complete los datos correctamente", "error");
      }
    });
  
    document.getElementById('cancelar').addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'album.html';
    });
  });
  ;