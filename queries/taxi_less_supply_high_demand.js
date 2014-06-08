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

			// Perform querying and emit event
			/*
				booking_rate: config.high_demand || 5, 	  // High number of bookings in the past
				time_range: config.time_range || 30,	  // around 30 minutes from now
				available_taxis: config.less_supply || 2, // but less number of available taxis
				search_range: config.search_range || 1,	  // in 1km radius of the area
				notify_range: config.notify_range || 5	  // notify taxis within 5km radius of the area
				
				// High demand
				select area_id from (
					select count(1) as number, bookings.area_id from bookings 
										where 	booking_time < getdate()
												and booking_time.weekday = getdate().weekday
												and booking_time.hour = getdate().hour
												and booking_time.minute < getdate().minute + 30
				) where number > booking_rate
				
				// Low supply
				select count(taxi_positions.taxi_id) as number, 
					areas.area_id, 
					taxi_positions.taxi_id from areas, taxi_positions
						where 		taxi_positions.latitude < areas.latitude + 5
								and taxi_positions.latitude > areas.latitude - 5
								and taxi_positions.longitude < areas.longitude + 5
								and taxi_positions.longitude > areas.longitude - 5
								
								and 
				
						
						
			*/
			
			persist.connect(function(error, connection){
				if(error){
					console.log(error);
					return;
				}
				// Fake result
				var data = {
					error: 0,
					area: { area_id: 23875 },
					taxis_should_arrives: [ { taxi_id: 7833972 }, { taxi_id: 1659542 } ]
				};
				
				self.emit('data', data);
			});
		};
	};
	
	util.inherits(Query, events.EventEmitter);
	module.exports = function(opts){ 
		return new Query(opts);
	};

}).call(this);