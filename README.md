# Assignment: Express.js & Modul Node.js

## Identitas
- Nama : Muhammad Zidan Azzaki
- NIM  : F1D022080

---

## Deskripsi Tugas
Tugas ini bertujuan untuk memahami dasar penggunaan **Express.js** dan **modul lokal Node.js** dengan membuat server sederhana serta memanfaatkan route modular.

Langkah pengerjaan:
1. Membuat folder project dengan nama `expressModule_F1D022080`.
2. Inisialisasi project Node.js dengan `npm init -y`.
3. Install Express.js dengan `npm install express`.
4. Membuat file `index.js` yang menampilkan:
   - `/` → menampilkan Nama dan NIM.
   - `/hitung` → menampilkan hasil penjumlahan dari fungsi `plus()` pada `math.js`.
5. Membuat folder `utils/` berisi `math.js` dengan fungsi `plus, minus, times, divide`.
6. Membuat folder `routes/` berisi:
   - `profile.js` → route `/profile` dan `/profile/:id`.
   - `soal.js` → route `/pertanyaan` dan `/pertanyaan/:id`.
7. Menghubungkan semua router ke `index.js` dengan `app.use()`.

---

## Struktur Folder
```
expressModule_F1D022080/
│── index.js
│── package.json
│── utils/
│   └── math.js
│── routes/
│   ├── profile.js
│   └── soal.js
```

---

## Hasil
1. **GET `/`**
 <img width="598" height="126" alt="image" src="https://github.com/user-attachments/assets/2e5d9209-9186-4f7b-aacf-5f3540e8d355" />

   
   <img width="960" height="364" alt="image" src="https://github.com/user-attachments/assets/72abecc4-962a-4633-9359-9416e7f5d8e8" />

   ```
   Nama: Muhammad Zidan Azzaki - NIM: F1D022080
   ```

3. **GET `/hitung`**
   ```
   Hasil penjumlahan 7 + 8 = 15
   ```

4. **GET `/profile`**
   ```json
   [
     { "id": 1, "nim": "F1D022080", "nama": "Muhammad Zidan Azzaki", "jurusan": "Teknik Informatika", "angkatan": 2022 },
     { "id": 2, "nim": "F1D022001", "nama": "Ajeng Sakinah Wulandari", "jurusan": "Teknik Informatika", "angkatan": 2022 },
     { "id": 3, "nim": "F1D022002", "nama": "Andi Sibwayiq Abi Mahmud", "jurusan": "Teknik Informatika", "angkatan": 2022 },
     { "id": 4, "nim": "F1D022060", "nama": "M. Ario Putra Ferdian", "jurusan": "Teknik Informatika", "angkatan": 2022 }
   ]
   ```

5. **GET `/profile/1`**
   ```json
   { "id": 1, "nim": "F1D022080", "nama": "Muhammad Zidan Azzaki", "jurusan": "Teknik Informatika", "angkatan": 2022 }
   ```

6. **GET `/pertanyaan`**
   ```json
   [
     { "id": 1, "pertanyaan": "Berapa total orang yang menghadiri pesta Andi (termasuk Andi sendiri)?", "jawaban": 19 },
     { "id": 2, "pertanyaan": "Berapa total potong pizza yang tersedia?", "jawaban": 24 },
     { "id": 3, "pertanyaan": "Setelah semua orang mendapat masing-masing 1 potong kue, berapa sisa potong kue yang ada?", "jawaban": 1 },
     { "id": 4, "pertanyaan": "Jika total biaya jus Rp 144.000, berapa harga per botol jus buah kecil?", "jawaban": "Rp 2.000" }
   ]
   ```

7. **GET `/pertanyaan/1`**
   ```json
   { "id": 1, "pertanyaan": "Berapa total orang yang menghadiri pesta Andi (termasuk Andi sendiri)?", "jawaban": 19 }
   ```

---

