require('dotenv').config()
const recoginition = require('./modules/recognition')
const calorieNinjas = require('./modules/calorieNinjas')
// import calorieNinjas from './modules/calorieNinjas.js'
// import dotenv from 'dotenv'
// dotenv.config()

// recoginition()
//     .then((res)=>{
//         console.log('Success')
//         console.log(res)
//         process.exit(1)
//     })
//     .catch((e)=>{
//         console.log('===ERROR==='+e)
//         process.exit(1)
//     })
const app = async () => {
    const calorie = await calorieNinjas('egg')
    console.log(calorie)
}

try{
    app()
}catch(e){
    console.log(`###ERROR MESSAGE###\n${e}`)
}