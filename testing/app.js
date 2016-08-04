var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send([
    '<!doctype html>',
    '<html>',
    '<body>',
    'Hello world!',
    '</body>',
    '</html>'
  ].join(''))
})

app.use(function (req, res) {
  res.statusCode = 404
  res.end('Not found!')
})

if (require.main === module) {
  app.listen(3000)
}

module.exports = app
