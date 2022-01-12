const axios = require('axios');

const calorieNinjas = async (query) => {
    const find = query.join(' ')
    const response = await axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${find}`, {
        headers:{
            'X-Api-Key': process.env.CALORIENINJAS_API_KEY
        }
    })

    const data = await response.data.items

    if(data.length == 0){
        return {
            'label':'Gambar Tidak Terdeteksi',
            'calorie':0
        }
    }

    return {
        'label':data[0].name,
        'calorie':data[0].calories
    }
}

module.exports = calorieNinjas