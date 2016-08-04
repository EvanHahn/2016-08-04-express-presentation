var express = require('express')

var app = express()

app.use(function (req, res, next) {
  var now = new Date()
  var unlockAt = new Date(2016, 7, 4)
  if (now >= unlockAt) {
    next()
  } else {
    res.statusCode = 403
    res.end('come back on august 4th!')
  }
})

app.use(function (req, res) {
  res.end('the password is 123456')
})

app.listen(3000, function () {
  console.log('App started on port 3000')
})
