import express from 'express';
import { specs, swaggerUi } from './swagger.js';

const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *  get:
 *   summary: Hello world
 *   responses:
 *    200:
 *     description: Berhasil mendapatkan pesan
 */

const port = 8000;
const Hostname = 'localhost';

// Middleware untuk parsing JSON
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('Hello World!');
});

const dataFilm = [];

app.get('/film', (req, res) => {
    return res.status(200).json(dataFilm);
});

app.post('/film', (req, res) => {
    const filmBaru = {
        id: dataFilm.length + 1,
        judul: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    }

    dataFilm.push(filmBaru);

    return res.status(201).json(filmBaru);
});

app.listen(port, Hostname, () =>
    console.log(`Peladen berjalan di ${Hostname}:${port}`)
);
