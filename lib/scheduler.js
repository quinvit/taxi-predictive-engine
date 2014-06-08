/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {

	var events = require('events'),
		util = require('util');
	
	var Scheduler = function(query, interval){
		var self = this,
			query = query,
			interval = interval || 30000; // Seconds
		
		var error = function(message){
			// Emit event with error flag
			self.emit('data', { error: 1, message: message});
			self.stop();
		};
		
		var task = function(){
			if(query instanceof events.EventEmitter && query.run){
				query.on('data', function(data){
					if(data && data.error === 0) {
						self.emit('data', { error: 0, data: data });
					}
					else {
						error('Query executes error.');
					}
				});
				
				query.run();
			}
			else {
				error('Query should be an EventEmitter instance.');
			}
			
			self.job = setTimeout(task, interval);
		};
		
		self.stop = function(){
			// Cancel the job
			self.job && (self.job = clearTimeout(self.job));
		};
		
		self.start = function(){
			// Schedule the job
			self.job = setTimeout(task, interval, query);
			return self.job;
		};
	};
	
	util.inherits(Scheduler, events.EventEmitter);
	module.exports = function(query, interval){
		return new Scheduler(query, interval);
	};

}).call(this);