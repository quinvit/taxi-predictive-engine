/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {

	var events = require('events'),
		util = require('util'),
		persist = require('persist');
	
	// Modeling
	var Taxi = require('../models/taxi'),
		Area = require('../models/area'),
		Booking = require('../models/booking'),
		Driver = require('../models/driver'),
		Taxi_Position = require('../models/taxi_position');
	
	var Query = function(opts){
		var self = this;
		
		self.run = function () {

			/*
				booking_rate: config.high_demand || 5, 	  // High number of bookings in the past
				time_range: config.time_range || 30,	  // around 30 minutes from now
				available_taxis: config.less_supply || 2, // but less number of available taxis
				search_range: config.search_range || 1,	  // in 1km radius of the area
				notify_range: config.notify_range || 5	  // notify taxis within 5km radius of the area		
			*/
			
			persist.connect(function(error, connection){
				if(error){
					self.emit('error', error);
					return;
				}
				
				connection.runSql("call taxi_less_supply_high_demand", [], function(error, results) {
					if(error){
						self.emit('error', error);
						return;
					}
					
  					self.emit('data', results[0]);
				});
			});
		};
	};
	
	util.inherits(Query, events.EventEmitter);
	module.exports = function(opts){ 
		return new Query(opts);
	};

}).call(this);