const axios = require('axios');

const calorieNinjas = async (query) => {
    const response = await axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
        headers:{
            'X-Api-Key': process.env.CALORIENINJAS_API_KEY
        }
    })
    const data = await response.data.items[0].calories
    return data
}

module.exports = calorieNinjas