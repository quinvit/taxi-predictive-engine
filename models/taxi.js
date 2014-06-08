/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {
  var persist = require('node-persist');
  var type = persist.type;
	
  module.exports = function (opts) {
	return persist.define("taxis", {
	  "taxi_id": type.INTEGER,
	  "taxi_number": type.INTEGER
	});
  };

}).call(this);