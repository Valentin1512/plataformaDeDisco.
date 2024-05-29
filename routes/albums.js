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
      res.status(500).send('Error a guardar un nuevo album');
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




module.exports = router;

































/*
const express = require('express');
const router = express.Router();
const Album = require('../models/album');

// Ruta para agregar un álbum
router.post("/", async function(req, res) {
  try {
    let datos = req.body;
    console.log(datos)
    let newAlbum = new Album(datos);
    await newAlbum.save();
    res.send('Álbum creado exitosamente');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para editar un álbum
router.put("/:id", async function(req, res) {
  try {
    const albumId = req.params.id;
    const updatedAlbum = req.body;
    const album = await Album.findByIdAndUpdate(albumId, updatedAlbum, { new: true });
    if (!album) {
      return res.status(404).json({ message: 'Álbum no encontrado' });
    }
    res.send('Álbum actualizado exitosamente');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar una canción del álbum
router.delete("/:albumId/:songId", async function(req, res) {
  try {
    const albumId = req.params.albumId;
    const songId = req.params.songId;
    const album = await Album.findById(albumId);
    if (!album) {
      return res.status(404).json({ message: 'Álbum no encontrado' });
    }
    album.Canciones.pull({ _id: songId });
    await album.save();
    res.send('Canción eliminada del álbum exitosamente');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para agregar una canción al álbum
router.post("/:albumId/:songId", async function(req, res) {
  try {
    const albumId = req.params.albumId;
    const { Titulo, Duracion } = req.body;
    const album = await Album.findById(albumId);
    if (!album) {
      return res.status(404).json({ message: 'Álbum no encontrado' });
    }
    album.Canciones.push({ Titulo, Duracion });
    await album.save();
    res.send('Canción agregada al álbum exitosamente');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta que devuelve todos los álbumes
router.get("/", async function(req, res) {
  try {
    const albums = await Album.find({});
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Ruta que devuelve la información de un álbum específico
router.get("/:Id", async function(req, res) {
  try {
    const albumId = req.params.Id;
    const album = await Album.findById(albumId);
    if (!album) {
      return res.status(404).json({ message: 'Álbum no encontrado' });
    }
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar un álbum
router.delete("/:Id", async function(req, res) {
  try {
    const albumId = req.params.Id;
    const album = await Album.findByIdAndDelete(albumId);
    if (!album) {
      return res.status(404).json({ message: 'Álbum no encontrado' });
    }
    res.send('Álbum eliminado exitosamente');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

*/