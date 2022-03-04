// console.log('hello')
// ke terminal ketikan node index.js

// biasanya tulis gini (cara NodeJS)
const express = require('express')
// artinya sama kayak gini, import express form 'express' (Cara ES6)

const app = express()

//ke browser ketikan localhost:4000, jika muncul hello server.. maka dinyatakan berhasil terhubung ke server
app.use(()=>{
    console.log('hello server...')
    console.log('tiga')
})

app.listen(4000)