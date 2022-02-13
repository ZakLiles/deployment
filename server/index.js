const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 4005

app.get('/', (req, res) => {
    console.log('Get Request HTML')
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/main.js', (req, res) => {
    console.log('Get Request JS')
    res.sendFile(path.join(__dirname), '../public/main.js')
})

app.get('/styles.css', (req, res) => {
    console.log('Get Request JS')
    res.sendFile(path.join(__dirname), '../public/styles.css')
})

app.listen(port, () => {
    console.log('Docked at port ' + port)
})