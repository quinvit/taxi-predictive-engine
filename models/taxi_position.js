/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {
  var persist = require('persist');
  var type = persist.type;
	
  module.exports = function (opts) {
	return persist.define("taxi_positions", {
	  "taxi_id": type.INTEGER,
	  "latitude": type.REAL,
	  "longitude": type.REAL
	});
  };

}).call(this);