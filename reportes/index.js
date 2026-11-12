import express from 'express';

const CURSOS_URL = process.env.CURSOS_URL ?? 'http://localhost:3000';
const ESTUDIANTES_URL = process.env.ESTUDIANTES_URL ?? 'http://localhost:5000';
const app = express();

app.get('/resumen', async (_req, res) => {
  try {
    // Llama al microservicio de cursos
    const rCursos = await fetch(`${CURSOS_URL}/cursos`);
    const cursos = await rCursos.json();

    // Llama al nuevo microservicio de estudiantes
    const rEstudiantes = await fetch(`${ESTUDIANTES_URL}/estudiantes`);
    const estudiantes = await rEstudiantes.json();

    res.json({
      totalCursos: cursos.length,
      totalCreditos: cursos.reduce((s, c) => s + c.creditos, 0),
      totalEstudiantes: estudiantes.length
    });
  } catch {
    res.status(503)
       .json({ error: 'Fallo al comunicarse con los microservicios' });
  }
});

app.listen(4000);