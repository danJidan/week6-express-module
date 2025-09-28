const express = require('express');
const router = express.Router();

/*
Soal: Pesta Ulang Tahun
- Andi mengundang 15 teman + 3 sepupu + Andi sendiri
- Pizza: 3 loyang, 1 loyang = 8 potong
- Jus: 6 kotak, 1 kotak = 12 botol, total harga Rp 144.000
- Kue: 20 potong, dibagi rata ke semua orang
*/

// Data
const teman = 15;
const sepupu = 3;
const andi = 1;
const orang = teman + sepupu + andi;

const loyang = 3;
const potongPerLoyang = 8;
const totalPizza = loyang * potongPerLoyang;

const totalKue = 20;
const sisaKue = totalKue - orang;

const kotakJus = 6;
const botolPerKotak = 12;
const totalBotol = kotakJus * botolPerKotak;
const totalHargaJus = 144000;
const hargaPerBotol = totalHargaJus / totalBotol;

// Data soal + pertanyaan + jawaban
const soal = [
  {
    id: 1,
    pertanyaan: "Berapa total orang yang menghadiri pesta Andi (termasuk Andi sendiri)?",
    jawaban: orang
  },
  {
    id: 2,
    pertanyaan: "Berapa total potong pizza yang tersedia?",
    jawaban: totalPizza
  },
  {
    id: 3,
    pertanyaan: "Setelah semua orang mendapat masing-masing 1 potong kue, berapa sisa potong kue yang ada?",
    jawaban: sisaKue
  },
  {
    id: 4,
    pertanyaan: "Jika total biaya jus Rp 144.000, berapa harga per botol jus buah kecil?",
    jawaban: `Rp ${hargaPerBotol.toLocaleString('id-ID')}`
  }
];

// GET /pertanyaan → tampil semua soal + jawaban
router.get('/', (req, res) => {
  res.json(soal);
});

// GET /pertanyaan/:id → tampil pertanyaan + jawaban tertentu
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const item = soal.find(q => q.id === parseInt(id));

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: `Pertanyaan dengan ID ${id} tidak ditemukan` });
  }
});

module.exports = router;
