// index.js

// importa la libreria express
const express = require('express');

// crea el objeto app
const app = express();

// la app responde con Hello world
// a todas las peticiones GET a /
app.get('/', (req, res) => {
  res.send('Probando proyecto 1 Spinazzola Vanina');
});

// el server escucha en el puerto 3000
app.listen(3000);