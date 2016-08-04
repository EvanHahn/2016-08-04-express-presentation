var express = require('express')
var consolidate = require('consolidate')

var app = express()

app.set('view engine', 'dust')
app.engine('dust', consolidate.dust)

app.get('/', function (req, res) {
  res.render('test', {
    who: 'world'
  })
})

app.listen(3000)
