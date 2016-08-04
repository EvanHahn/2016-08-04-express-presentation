var supertest = require('supertest')
var app = require('../app')

describe('homepage', function () {
  it('responds with HTML', function (done) {
    supertest(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(done)
  })
})
