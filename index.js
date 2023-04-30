const express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')

app.use(cors())

const catagoris = require('./data/catagoris.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('dragon is running')
})

app.get('/catagoris', (req, res) => {
    res.send(catagoris)
})
app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedId = news.find(n => n._id === id)
    res.send(selectedId)
})
app.get('/catagoris/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    }
    else {
        const catagorisNews = news.filter(n => n.category_id == id)
        res.send(catagorisNews)
    }
})

app.listen(port, () => {
    console.log(`dragon api is running on port is ${port}`)
})