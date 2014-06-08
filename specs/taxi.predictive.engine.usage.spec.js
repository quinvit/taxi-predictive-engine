var should = require('should');
var engine = require('../index');

describe('When using the taxi predictive engine', function () {

    var key = 'taxipredictiveengine:test';

    before(function (done) {
        engine = require('../index');
        engine.start();
        done();
    });

    after(function (done) {
        engine.stop();
        done();
    });

    it('should have a message after one minute', function (done) {
        engine.on('message', function (message) {
            done();
        });
    });
});