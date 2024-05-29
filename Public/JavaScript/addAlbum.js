// public/addAlbum.js

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addAlbumForm').addEventListener('submit', async function (e) {
      e.preventDefault();

      // Obtener los valores de los campos del formulario
      const titulo = document.getElementById('titulo').value;
      const anio = document.getElementById('anio').value;
      const descripcion = document.getElementById('descripcion').value;
      const portada = document.getElementById('imagen').value;
      

      try {
          // Enviar los datos al servidor
          const response = await axios.post('/albums/album', {
              titulo,
              descripcion,
              anio,
              portada
          });

          if (response.status === 201) {
              // Mostrar un mensaje de éxito
              swal("¡Éxito!", "Álbum añadido correctamente", "success").then(() => {
                  // Redirigir a la página de álbumes
                  window.location.href = 'album.html';
              });
          }
      } catch (error) {
          // Mostrar un mensaje de error
          swal("Error", "Hubo un problema al añadir el álbum", "error");
      }
  });

  document.getElementById('cancelar').addEventListener('click', function (e) {
      e.preventDefault();
      // Redirigir a la página de álbumes
      window.location.href = 'album.html';
  });
});
