/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {

	var events = require('events');
	var util = require('util');
	var schedule = require('node-persist');
	
	// Modeling
	var Taxi = require('../models/taxi');
	var Area = require('../models/area');
	var Booking = require('../models/booking');
	var Driver = require('../models/driver');
	var Taxi_Position = require('../models/taxi_position');
	
	var Query = function(opts){
		this.run = function () {

			// Perform querying and emit event
			/*
				booking_rate: config.high_demand || 5, 	  // High number of bookings in the past
				time_range: config.time_range || 30,	  // around 30 minutes from now
				available_taxis: config.less_supply || 2, // but less number of available taxis
				search_range: config.search_range || 1,	  // in 1km radius of the area
				notify_range: config.notify_range || 5	  // notify taxis within 5km radius of the area
			*/
			
			// Fake result
			var result = {
				area: { area_id: 2 },
				taxis_should_arrives: [ { taxi_id: 2 }, { taxi_id: 3 } ]
			};
			
			this.emit('result', result);
		};
	};
	
	util.inherits(Query, events.EventEmitter);
	module.exports = function(opts){ 
		return new Query(opts);
	};

}).call(this);