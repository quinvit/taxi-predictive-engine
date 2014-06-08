var should = require('should');
var engine = require('../index');
var config = require('../configuration');
config = config[config['default']];

var redisManager = require('redis-client-manager');

describe('When using the taxi predictive engine', function () {

    before(function (done) {
        engine = require('../index');
        redisClient = redisManager.getClient(config.redis_connection);	
        engine.start();
        done();
    });

    after(function (done) {
        engine.stop();
        done();
    });

    it('should have a message in predictions Redis queue', function (done) {
        engine.on('message', function (message) {
        	redisClient.lpop(config.redis_queue, function(error, item){
        		if (message != item) {
        			throw error;
        		}
        		else { 
        			done();
        		}
        	});
        });
    });
});