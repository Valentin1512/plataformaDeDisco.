const express = require('express');
const router = express.Router();
const Album = require('../models/album'); // Importamos el modelo de Album

// Ruta para manejar la obtención de álbumes
router.get('/album', async (req, res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (err) {
        res.status(500).send('Error retrieving albums');
    }
});

// Ruta para manejar la actualización de un álbum
router.put('/album/:id', async (req, res) => {
  const { titulo, descripcion, portada, anio } = req.body;
  
  try {
      const album = await Album.findByIdAndUpdate(
          req.params.id,
          { titulo, descripcion, portada, anio },
          { new: true }
      );
      if (!album) {
          return res.status(404).send('Álbum no encontrado');
      }
      res.json(album);
  } catch (err) {
      res.status(500).send('Error actualizando el álbum');
  }
});


// Ruta para manejar la eliminación de un álbum
router.delete('/album/:id', async (req, res) => {
  try {
      const album = await Album.findByIdAndDelete(req.params.id);
      if (!album) {
          return res.status(404).send('Álbum no encontrado');
      }
      res.send('Álbum eliminado');
  } catch (err) {
      res.status(500).send('Error eliminando el álbum');
  }
});

// Ruta para manejar la adición de nuevos álbumes
router.post('/album', async (req, res) => {
  console.log('Datos recibidos:', req.body);
  const { titulo, descripcion, anio, canciones, portada } = req.body;

  const newAlbum = new Album({
      titulo,
      descripcion,
      anio,
      canciones,
      portada
  });

  try {
      await newAlbum.save();
      res.status(201).send('Album Creado');
  } catch (err) {
      console.error('Error al guardar el álbum:', err);
      res.status(500).send('Error al guardar un nuevo álbum');
  }
});



// Ruta para manejar la obtención de un álbum específico
router.get('/album/:id', async (req, res) => {
  try {
      const album = await Album.findById(req.params.id);
      if (!album) {
          return res.status(404).send('Álbum no encontrado');
      }
      res.json(album);
  } catch (err) {
      res.status(500).send('Error retrieving album');
  }
});

// Ruta para manejar la adición de canciones a un álbum específico
router.post('/album/:id/addSong', async (req, res) => {
  const { titulo, artista, duracion, url } = req.body;
  const albumId = req.params.id;
  console.log('Album ID from URL:', albumId);

  try {
      const album = await Album.findById(albumId);
      if (!album) {
          return res.status(404).send('Álbum no encontrado');
      }

      album.cancion.push({ titulo, artista, duracion, url });
      await album.save();

      res.status(200).send('Canción agregada correctamente');
  } catch (error) {
      console.error('Error adding song to album', error);
      res.status(500).send('Error adding song to album');
  }
});

router.get('/album/:albumId/song/:songId', async (req, res) => {
  try {
      const album = await Album.findById(req.params.albumId);
      if (!album) {
          return res.status(404).send('Álbum no encontrado');
      }
      const song = album.cancion.id(req.params.songId);
      if (!song) {
          return res.status(404).send('Canción no encontrada');
      }
      res.json(song);
  } catch (err) {
      res.status(500).send('Error retrieving song');
  }
});

// Ruta para manejar la eliminación de una canción de un álbum específico
router.delete('/album/:albumId/deleteSong/:songIndex', async (req, res) => {
  const albumId = req.params.albumId;
  const songIndex = req.params.songIndex;

  try {
      const album = await Album.findById(albumId);
      if (!album) {
          return res.status(404).send('Álbum no encontrado');
      }

      // Elimino la canción del array de canciones utilizando el índice
      album.cancion.splice(songIndex, 1);
      await album.save();

      res.status(200).send('Canción eliminada correctamente');
  } catch (error) {
      console.error('Error deleting song from album', error);
      res.status(500).send('Error deleting song from album');
  }
});





module.exports = router;































