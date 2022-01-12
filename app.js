require('dotenv').config()
const fs = require('fs')
const moment = require('moment');
const ObjectsToCsv = require('objects-to-csv');
const recoginition = require('./modules/recognition')
const calorieNinjas = require('./modules/calorieNinjas')

const app = async () => {
    const samples = []
    const result = []
    const dir = await fs.promises.opendir('./samples')
    for await (const dirent of dir){
        samples.push(dirent.name)
    }
    samples.sort()
    samples.slice(0,1)

    for await (const sample of samples){
        const imgfile = `./samples/${sample}`
        const labels = await recoginition(imgfile)
        //console.log(...labels)
        const calorie = await calorieNinjas(labels)
        //console.log(calorie)
        console.log(`Hasil deteksi: ${calorie.label} | Estimasi Kalori: ${calorie.calorie}`)
        result.push({
            'sample':sample,
            'label':calorie.label,
            'calorie':calorie.calorie,
            'timestamp':moment().format('YYYY-MM-DD-HH-mm-ss-SSS')
        })
    }
    //console.log(result)
    console.log('Menulis hasil deteksi pada ./output/results.csv')
    const csv = new ObjectsToCsv(result);
    await csv.toDisk('./output/results.csv',{ append: true });
}

app()
    .then(()=>{
        console.log('Aplikasi Selesai')
        process.exit(1)
    })
    .catch((e)=>{
        console.log(`\n#######ERROR MESSAGE######\n${e}`)
    })