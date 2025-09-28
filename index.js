const express = require('express');
const app = express();
const port = 3000;

// Import modul math.js
const { plus } = require('./utils/math');

// Import router profile & soal
const profileRouter = require('./routes/profile');
const soalRouter = require('./routes/soal');

// Route utama
app.get('/', (req, res) => {
  res.send('Nama: Muhammad Zidan Azzaki - NIM: F1D022080');
});

// Route hitung → hanya penjumlahan
app.get('/hitung', (req, res) => {
  const hasil = plus(7, 8);
  res.send(`Hasil penjumlahan 7 + 8 = ${hasil}`);
});

// Gunakan router profile
app.use('/profile', profileRouter);

// Gunakan router soal matematika
app.use('/pertanyaan', soalRouter);

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
