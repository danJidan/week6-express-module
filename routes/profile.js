const express = require('express');
const router = express.Router();

const profiles = [
  { 
    id: 1,
    nim: 'F1D022080', 
    nama: 'Muhammad Zidan Azzaki', 
    jurusan: 'Teknik Informatika',
    angkatan: 2022
  },
  { 
    id: 2,
    nim: 'F1D022001', 
    nama: 'Ajeng Sakinah Wulandari', 
    jurusan: 'Teknik Informatika',
    angkatan: 2022
  },
  { 
    id: 3,
    nim: 'F1D022002', 
    nama: 'Andi Sibwayiq Abi Mahmud', 
    jurusan: 'Teknik Informatika',
    angkatan: 2022
  },
  { 
    id: 4,
    nim: 'F1D022060', 
    nama: 'M. Ario Putra Ferdian', 
    jurusan: 'Teknik Informatika',
    angkatan: 2022
  }
];

// GET /profile → semua profile
router.get('/', (req, res) => {
  res.json(profiles);
});

// GET /profile/:id → detail profile
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const profile = profiles.find(p => p.id === parseInt(id));

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: `Profile dengan ID ${id} tidak ditemukan` });
  }
});

module.exports = router;
