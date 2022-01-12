# Food Detection using Google Cloud Vision and CalorieNinjas API

> Deteksi Kalori Makanan Melalui Gambar Makanan dengan Google Cloud Vision dan CalorieNinjas API

## Instalasi

1. Clone repositori ini:

```bash
git clone https://github.com/fiandinw/food-detection.git
```

2. Install dependensi yang diperlukan

```bash
npm install
```

3. Buat izin akses pada API [Google Vision](https://cloud.google.com/vision) dan [Calorie Ninjas](https://calorieninjas.com/)

4. Buat environment variable `.env`

```env
GOOGLE_APPLICATION_CREDENTIALS= Google_Cloud_Api_Key.json
CALORIENINJAS_API_KEY = Calorie_Ninjas_Key
```
5. Masukan gambar sampel ke folder `./samples/`

6. Jalankan aplikasi

```bash
node app.js
```

- atau

```bash
npm start
```

7. Hasil deteksi akan tercatat pada `./output/results.csv`

Created by [fiandinw](https://github.com/fiandinw)