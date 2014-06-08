/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {

	var events = require('events');
	var util = require('util');

	var config = require('./configuration');
	
	var interval = config.predict_interval || 1; // In minutes
	var scheduler = require('./lib/scheduler')(interval);
	
	var Engine = function(){
		var self = this;
		
		self.start = function(){
			scheduler.on('data', function(data){
				// Transform data to message
				var message = data; // Some stuff...
				self.emit('message', message);
			});
			
			var taxi_less_supply_high_demand = require('./queries/taxi_less_supply_high_demand')(config.taxi_less_supply_high_demand);
			scheduler.start(taxi_less_supply_high_demand);
		};
	};
	
	util.inherits(Engine, events.EventEmitter);
	module.exports = new Engine();

}).call(this);