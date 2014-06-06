/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/
(function () {
	var redisManager = require('redis-client-manager');
	var redisClient = redisManager.getClient();
	
	redisClient.lpush('hello_queue', 'world');

  // Function to get the connection, if the connection exist returns the connection.
  // If it doesn't exist, create a new connection
  // Take in options for the port & host
  exports.getClient = function (opts) {
    var opts = opts || {};
    if (redisClient === null) {
      redisClient = redis.createClient(opts.redisPort, opts.redisHost);
    }
    return redisClient;
  };

}).call(this);