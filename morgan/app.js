var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('dev'))

app.use(function (req, res) {
  res.end('Hello world!')
})

app.listen(3000)
