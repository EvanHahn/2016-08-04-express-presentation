var express = require('express')

var app = express()

app.use(function (req, res, next) {
  console.log('Incoming request to ' + req.url)
  next()
})

app.use(function (req, res) {
  res.end('Hello world!')
})

app.listen(3000)
