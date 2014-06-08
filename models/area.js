/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {
  var persist = require('node-persist');
  var type = persist.type;
	
  module.exports = function (opts) {
	return persist.define("areas", {
	  "area_id": type.INTEGER,
	  "address": type.STRING,
	  "latitude": type.REAL,
	  "longitude": type.REAL
	});
  };

}).call(this);