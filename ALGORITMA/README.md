# Solusi JavaScript

## 1. NEGIE.js

**Penjelasan Kode:**

- Menggunakan `match()` dengan Regular Expressions (Regex) untuk mengekstrak bagian huruf (`[A-Za-z]+`) dan angka (`\d+`) dari string input.
- `letters.split('').reverse().join('')` digunakan untuk membalik urutan huruf. Ini dilakukan dengan mengubah string huruf menjadi array (`split('')`), membalik array (`reverse()`), dan menggabungkannya kembali menjadi string (`join('')`).
- `return reversedLetters + numbers;` menggabungkan huruf yang sudah dibalik dengan angka yang diekstrak tanpa membalikkannya, karena angka harus tetap di akhir kata sesuai soal.

## 2. kataTerpanjang.js

**Penjelasan:**

- Fungsi `split(' ')` digunakan untuk memecah kalimat menjadi array kata-kata berdasarkan spasi.
- Metode `reduce()` digunakan untuk menelusuri setiap kata dalam array. Untuk setiap kata, fungsi pengecekan (`currentWord.length > longest.length`) menentukan apakah kata saat ini lebih panjang dari kata terpanjang yang telah ditemukan sejauh ini. Jika ya, kata saat ini menjadi kata terpanjang baru. Jika tidak, kata terpanjang sebelumnya tetap dipertahankan.
- Variabel `longestWord` akan menyimpan kata terpanjang yang ditemukan setelah seluruh array telah diperiksa.

## 3. inputQuery.js

**Penjelasan:**

- Fungsi `countOccurrences` menerima dua parameter: `input` (array INPUT) dan `query` (array QUERY).
- Menggunakan metode `reduce()` untuk membuat objek `frequency` yang menampung jumlah kemunculan setiap kata dalam array INPUT.
- Objek `frequency` akan memiliki kunci yang sama dengan elemen dalam array INPUT dan nilai yang mewakili jumlah kemunculan elemen tersebut.
- Setelah itu, metode `map()` digunakan untuk menghasilkan array baru berdasarkan array QUERY, di mana setiap elemen digantikan dengan frekuensi kemunculannya dalam objek `frequency`. Jika suatu kata dari QUERY tidak ada dalam INPUT, maka akan mengembalikan `0`.

## 4. matrix.js

**Penjelasan kode:**

- Fungsi `diagonalDifference` menerima satu parameter, yaitu `matrix`, yang merupakan matriks NxN.
- Dua variabel `diagonalPrimary` dan `diagonalSecondary` diinisialisasi untuk menyimpan jumlah dari elemen-elemen pada diagonal utama dan diagonal sekunder, masing-masing.
- Loop `for` berjalan sepanjang panjang matriks (N) untuk mengakses setiap elemen diagonal.
- `diagonalPrimary` dihitung dengan menambahkan elemen-elemen di mana indeks baris dan kolomnya sama ( `[i][i]`).
- `diagonalSecondary` dihitung dengan menambahkan elemen-elemen di mana indeks baris dan kolomnya adalah cerminan terhadap sumbu tengah matriks (i.e., `[i][matrix.length - 1 - i]`).
