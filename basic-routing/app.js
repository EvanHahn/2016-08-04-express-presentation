var express = require('express')

var app = express()

app.use(function (req, res, next) {
  console.log('Incoming request to ' + req.url)
  next()
})

app.get('/', function (req, res) {
  res.end('Welcome to the homepage!')
})

app.get('/about', function (req, res) {
  res.end('Learn all about me!! I am a loser')
})

app.use(function (req, res) {
  res.statusCode = 404
  res.end('Not found!')
})

app.listen(3000)
