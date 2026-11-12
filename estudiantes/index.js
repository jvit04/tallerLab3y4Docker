import express from 'express';

const app = express();

// Datos en memoria
const estudiantes = [
  { nombre: 'Ana', carrera: 'Computación' },
  { nombre: 'Juan', carrera: 'Diseño' },
  { nombre: 'María', carrera: 'Robótica' }
];

app.get('/estudiantes', (req, res) => {
  res.json(estudiantes);
});

app.listen(5000, () => console.log('Servicio estudiantes en el puerto 5000'));