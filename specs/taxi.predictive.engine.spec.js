/*
Copyright (c) Qui.Nguyen 2014
Author: Qui.Nguyen <quinvit@yahoo.com>
*/
(function () {
  var should, engine;

  should = require('should');
  engine = require('../index');

  describe('When call the manager to get the redis client', function () {
    before(function (done) {
      redisClient = redisManager.getClient()
      done()
    })

    after(function (done) {
      redisClient.quit()
      done()
    })

    it('should not return an empty object', function (done) {
      should.exist(redisClient)
      done()
    })

    it('should be in ready state', function (done) {
      redisClient.ready.should.be.true
      done()
    })
  })
}).call(this);