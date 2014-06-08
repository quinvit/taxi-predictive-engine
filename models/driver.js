/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {
  var persist = require('persist');
  var type = persist.type;
	
  module.exports = function (opts) {
	return persist.define("drivers", {
	  "driver_id": type.INTEGER,
	  "fullname": type.STRING,
	  "cellphone": type.STRING,
	  "taxi_id": type.INTEGER
	});
  };

}).call(this);