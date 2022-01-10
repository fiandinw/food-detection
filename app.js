require('dotenv').config()
const recoginition = require('./modules/recognition')

recoginition()
    .then((res)=>{
        console.log('Success')
        console.log(res)
    })
    .catch((e)=>{console.log('===ERROR==='+e)})