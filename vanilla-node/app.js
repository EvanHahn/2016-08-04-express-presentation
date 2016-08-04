var http = require('http')

var app = http.createServer(function (req, res) {
  console.log('Incoming request to ' + req.url)

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })

  res.end('Hello world!\n')
})

app.listen(3000)
