const express = require('express')
const app = express()
const port = process.env.port || 5000 ;
const cors = require('cors')

app.use(cors())

const catagoris = require('./data/catagoris.json')

app.get('/', (req,res) =>{
    res.send('dragon is running')
})

app.get('/catagoris', (req,res)=>{
    res.send(catagoris)
})

app.listen(port, () =>{
    console.log(`dragon api is running on port is ${port}`)
})