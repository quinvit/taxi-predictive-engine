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
				


				SELECT taxi_positions.taxi_id,
				       areas.area_id
				FROM areas
				LEFT JOIN taxi_positions ON taxi_positions.latitude < areas.latitude + 5 #radius of 5km
				AND taxi_positions.latitude > areas.latitude - 5
				AND taxi_positions.longitude < areas.longitude + 5
				AND taxi_positions.longitude > areas.longitude - 5
				WHERE areas.area_id IN
				    ( SELECT area_id
				     FROM
				       ( SELECT count(taxi_positions.taxi_id) AS available_taxis,
				                areas.area_id
				        FROM areas
				        LEFT JOIN taxi_positions ON taxi_positions.latitude < areas.latitude + 1 #radius of 1km
				        AND taxi_positions.latitude > areas.latitude - 1
				        AND taxi_positions.longitude < areas.longitude + 1
				        AND taxi_positions.longitude > areas.longitude - 1
				        AND areas.area_id IN
				          ( SELECT area_id
				           FROM
				             ( SELECT count(1) AS number_of_booking,
				                      bookings.area_id
				              FROM bookings
				              WHERE booking_time < NOW()
				                AND DAYOFWEEK(booking_time) = DAYOFWEEK(NOW())
				                AND HOUR(booking_time) = HOUR(NOW())
				                AND MINUTE(booking_time) < MINUTE(NOW()) + 30 ) a #around 30 minutes later
				           WHERE number_of_booking > 2 ) ) b
				     WHERE available_taxis < 2 )
				
						
						
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