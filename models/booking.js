/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {
  var persist = require('node-persist');
  var type = persist.type;
	
  module.exports = function (opts) {
	return persist.define("bookings", {
	  "booking_id": type.INTEGER,
	  "taxi_id": type.INTEGER,
	  "area_id": type.INTEGER,
	  "booking_time": type.DATETIME
	});
  };

}).call(this);