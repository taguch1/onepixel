var assert  = require('power-assert')
var request = require('supertest')
var app     = require('../../lib/onepixel')
describe('onepixel', function(){
  describe('response jpeg', function(){
    it('request .jpeg', function(done){
      request(app)
        .get('/onepixel.jpeg')
        .expect('Content-Type', /image\/jpeg/)
        .expect(200, done)
    })
    it('request .jpg', function(done){
      request(app)
        .get('/onepixel.jpg')
        .expect('Content-Type', /image\/jpeg/)
        .expect(200, done)
    })
    it('request .jpe', function(done){
      request(app)
        .get('/onepixel.jpe')
        .expect('Content-Type', /image\/jpeg/)
        .expect(200, done)
    })
  })
  describe('response png', function(){
    it('request .png', function(done){
      request(app)
        .get('/onepixel.png')
        .expect('Content-Type', /image\/png/)
        .expect(200, done)
    })
  })
  describe('response gif', function(){
    it('request .gif', function(done){
      request(app)
        .get('/onepixel.gif')
        .expect('Content-Type', /image\/gif/)
        .expect(200, done)
    })
  })
  describe('response other', function(){
    it('request .html', function(done){
      request(app)
        .get('/onepixel.txt')
        .expect('Content-Type', /text\/plain/)
        .expect(200, done)
    })
    it('request .txt', function(done){
      request(app)
        .get('/onepixel.txt')
        .expect('Content-Type', /text\/plain/)
        .expect(200, done)
    })
  })
})
