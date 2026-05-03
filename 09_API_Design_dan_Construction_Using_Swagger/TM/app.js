import express from 'express';
import { specs, swaggerUi } from './swagger.js';

const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));


const port = 8000;
const Hostname = 'localhost';

// Middleware untuk parsing JSON
app.use(express.json());

const angkaRahasia = {}

function generateAngkaRahasia(nama) {
    if (!angkaRahasia[nama]) {
        angkaRahasia[nama] = Math.floor(Math.random() * 100) + 1;
    }
    return angkaRahasia[nama];
}


/**
 * @swagger
 * /:
 *  post:
 *   summary: Guessing Game - Tebak angka
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             nama:
 *               type: string
 *               example: "Hamid"
 *             tebakan:
 *               type: integer
 *               example: 24
 *   responses:
 *    200:
 *     description: Tebakan benar
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             jawaban:
 *               type: string
 *    400:
 *     description: Tebakan terlalu tinggi atau terlalu rendah
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             jawaban:
 *               type: string
 */

app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    if (!nama || tebakan === undefined) {
        return res.status(400).json({ error: "Nama dan tebakan harus diisi" });
    }

    if (tebakan === secretNumber) {
        return res.status(200).json({
            jawaban: `Benar sekali! Tebakannya adalah ${secretNumber}.`
        });
    } else if (tebakan > secretNumber) {
        return res.status(400).json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    } else {
        return res.status(400).json({
            jawaban: "Tebakanmu terlalu rendah!"
        });
    }
});

app.listen(port, Hostname, () =>
    console.log(`Peladen berjalan di ${Hostname}:${port}`)
);

app.get('/reveal', (req, res) => {
    const qnama = req.query.nama;
    if (!qnama) return res.status(400).json({ error: 'Gunakan query ?nama=...' });
    const num = generateAngkaRahasia(qnama);
    return res.status(200).json({ nama: qnama, angkaRahasia: num });
});


