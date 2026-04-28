const express = require('express');
const app = express();
const { specs, swaggerUi } = require('./swagger.js');

const PORT = 3000;

app.get('/', (req, res) => {
    const landing = {
        "pesan": "Cek /docs untuk melihat rincian API"
    };

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});

const menuData = {
    bakmi: {
        "bakmi ayam spesial": 25000,
        "bakmi rica-rica": 28000,
        "bakmi komplit (bakso pangsit)": 35000
    },
    rames: {
        "nasi rames biasa": 15000,
        "nasi rames rendang": 25000,
        "nasi rames telur balado": 18000
    }
};

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     summary: "Menu-menu makanan yang tersedia"
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: "Menu berhasil ditampilkan"
 *       '404':
 *         description: "Menu tidak ditemukan"
 */
app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menu = menuData[category];

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});


/**
 * @swagger
 * /menu:
 *   get:
 *     summary: "Ambil semua kategori menu"
 *     responses:
 *       '200':
 *         description: "Daftar kategori berhasil diambil"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kategori_tersedia:
 *                   type: array
 *                   items:
 *                     type: string
 */
app.get('/menu', (req, res) => {
    const categories = Object.keys(menuData);
    res.json({ kategori_tersedia: categories });
});