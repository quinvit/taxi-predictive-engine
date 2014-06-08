/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {
	// Load configuration
	var config = require('./configuration');
	config = config[config['default']];

	var events = require('events'), 
		util = require('util'),
		redis = require('redis-client-manager').getClient(config.redis_connection);
	
	// Schedule and interval query
	var query = require('./queries/' + config.query)(config[config.query]);
	var scheduler = require('./lib/scheduler')(query, config.predict_interval);
	
	var Engine = function(){
		var self = this;
		
		self.start = function(){
			scheduler.on('data', function(data){
				// Transform data to message
				var message = data; // Some stuff...

				// Push to Redis queue
				redis.lpush(config.redis_queue || "predictions", message, function(error, numOfItems){
					if(error){
						throw error;
					}
					else {
						self.emit('message', message);
					}
				});
				
			});
			
			scheduler.on('error', function(error){
				self.emit('error', error);
			});
			
			scheduler.start();
		};
		
		self.stop = function(){
			scheduler.stop();
		};
	};
	
	util.inherits(Engine, events.EventEmitter);
	module.exports = new Engine();

}).call(this);
