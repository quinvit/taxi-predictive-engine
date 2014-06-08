/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {

	var events = require('events');
	var util = require('util');
	
	var redisManager = require('redis-client-manager');
	var redisClient = redisManager.getClient({
		redisPort: 6379,
		redisHost: 'localhost'
	});
	
	var config = require('./configuration');
	config = config[config['default']];
	
	var interval = config.predict_interval || 1; // In minutes
	var scheduler = require('./lib/scheduler')(interval);
	
	var Engine = function(){
		var self = this;
		
		self.start = function(){
			scheduler.on('data', function(data){
				// Transform data to message
				var message = data; // Some stuff...
				self.emit('message', message);
				// Push to Redis queue
				redisClient.lpush(config.message_queue || "predictions", message, function(error, numOfItems){
					
				});
			});
			
			var taxi_less_supply_high_demand = require('./queries/taxi_less_supply_high_demand')(config.taxi_less_supply_high_demand);
			scheduler.start(taxi_less_supply_high_demand);
		};
		
		self.stop = function(){
			scheduler.stop();
		};
	};
	
	util.inherits(Engine, events.EventEmitter);
	module.exports = new Engine();

}).call(this);