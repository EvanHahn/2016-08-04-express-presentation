var express = require('express')

var app = express()

app.set('view engine', 'ejs')

app.locals.siteTitle = 'My Webpage'

function getWeekday () {
  var now = new Date()
  return [
    'Mon',
    'Tues',
    'Wednes',
    'Thurs',
    'Fri',
    'Satur',
    'Sun'
  ][now.getDay() - 1] + 'day'
}

app.use(function (req, res, next) {
  res.locals.weekday = getWeekday()
  next()
})

app.get('/', function (req, res) {
  res.render('index', {})
})

app.listen(3000, function () {
  console.log('App started on port 3000')
})
