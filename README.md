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
   <img width="489" height="124" alt="image" src="https://github.com/user-attachments/assets/e040753a-5ec7-40ac-9f52-dbe254cee410" />
   <img width="961" height="249" alt="image" src="https://github.com/user-attachments/assets/7452f6f8-c25e-4872-8cd4-f23739914463" />


   ```
   Hasil penjumlahan 7 + 8 = 15
   ```

5. **GET `/profile`**

<img width="355" height="62" alt="image" src="https://github.com/user-attachments/assets/a043a382-ae87-4094-8fba-aab8210cf7cc" />

<img width="321" height="99" alt="image" src="https://github.com/user-attachments/assets/d5c063a9-1bb3-4a13-9ce2-9771c9bf8e8f" />

   <img width="958" height="306" alt="image" src="https://github.com/user-attachments/assets/9db84e27-cdcd-4e36-b90c-133bde4e6598" />

   ```json
   [
     { "id": 1, "nim": "F1D022080", "nama": "Muhammad Zidan Azzaki", "jurusan": "Teknik Informatika", "angkatan": 2022 },
     { "id": 2, "nim": "F1D022001", "nama": "Ajeng Sakinah Wulandari", "jurusan": "Teknik Informatika", "angkatan": 2022 },
     { "id": 3, "nim": "F1D022002", "nama": "Andi Sibwayiq Abi Mahmud", "jurusan": "Teknik Informatika", "angkatan": 2022 },
     { "id": 4, "nim": "F1D022060", "nama": "M. Ario Putra Ferdian", "jurusan": "Teknik Informatika", "angkatan": 2022 }
   ]
   ```

7. **GET `/profile/1`**
   ```json
   { "id": 1, "nim": "F1D022080", "nama": "Muhammad Zidan Azzaki", "jurusan": "Teknik Informatika", "angkatan": 2022 }
   ```

8. **GET `/pertanyaan`**

<img width="368" height="41" alt="image" src="https://github.com/user-attachments/assets/ee3d9d12-3f35-48a7-8351-50ac252083cb" />

<img width="711" height="258" alt="image" src="https://github.com/user-attachments/assets/77eb35bb-a60a-472c-b9eb-20a2e81262c8" />


   <img width="961" height="393" alt="image" src="https://github.com/user-attachments/assets/deaf0e35-9f05-4cd8-8ef5-fe2414a75847" />

   ```json
   [
     { "id": 1, "pertanyaan": "Berapa total orang yang menghadiri pesta Andi (termasuk Andi sendiri)?", "jawaban": 19 },
     { "id": 2, "pertanyaan": "Berapa total potong pizza yang tersedia?", "jawaban": 24 },
     { "id": 3, "pertanyaan": "Setelah semua orang mendapat masing-masing 1 potong kue, berapa sisa potong kue yang ada?", "jawaban": 1 },
     { "id": 4, "pertanyaan": "Jika total biaya jus Rp 144.000, berapa harga per botol jus buah kecil?", "jawaban": "Rp 2.000" }
   ]
   ```

10. **GET `/pertanyaan/1`**


   ```json
   { "id": 1, "pertanyaan": "Berapa total orang yang menghadiri pesta Andi (termasuk Andi sendiri)?", "jawaban": 19 }
   ```

---


