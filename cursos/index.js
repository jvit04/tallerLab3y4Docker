import express from 'express';
import mongoose from 'mongoose';

// La URL de la BD llega por variable de entorno
const MONGO_URL = process.env.MONGO_URL
    ?? 'mongodb://localhost:27017/academia';

const Curso = mongoose.model('Curso', new mongoose.Schema({
    nombre: { type: String, required: true },
    creditos: { type: Number, default: 3 },
}));

const app = express();
app.use(express.json());
app.get('/', (req, res) => res.json({ servicio: 'cursos', estado: 'funcionando' }));
app.get('/cursos', async (_req, res) => res.json(await Curso.find()));
app.get('/cursos/demo', async (_req, res) => res.status(201)
    .json(await Curso.create({ nombre: 'Desarrollo Web', creditos: 4 })));
app.post('/cursos', async (req, res) => res.status(201)
    .json(await Curso.create(req.body)));

await mongoose.connect(MONGO_URL);
app.listen(3000, () => console.log('Servicio cursos en el puerto 3000'));