const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World - API de William Ricky Soares')
})

app.get('/oi', function (req, res) {
    res.send('Olá mundo, nova rota de /oi')
  })

app.listen(3000)
