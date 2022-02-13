const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 4005

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})

app.get('/images/:imgName', (req, res) => {
    const {imgName} = req.params
    res.sendFile(path.join(__dirname, `../public/images/${imgName}`))
})

app.listen(port, () => {
    console.log('Docked at port ' + port)
})