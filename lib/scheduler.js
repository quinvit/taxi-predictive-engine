/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

(function () {

	var events = require('events');
	var util = require('util');
	var CronJob = require('cron').CronJob;
	
	var Scheduler = function(interval){
		var self = this;
		var interval = interval || 5; // Minutes
		
		self.stop = function(){
			return self.job && self.job.stop();
		};
		
		self.start = function(query){

			// Schedule a job
			self.job = new CronJob('*/x * * * *'.replace(/x/g, interval), function(){

				if(query instanceof events.EventEmitter && query.run){
					query.on('result', function(result){
						self.emit('data', {error: 0, data: result});
					});
					
					query.run();
				}
				else {
					// Emit event with error flag
					self.emit('data', {error: 1, message: 'Query should be an EventEmitter instance.'});
				}
			});
			
			return self.job.start();
		};
	};
	
	util.inherits(Scheduler, events.EventEmitter);
	module.exports = function(interval){
		return new Scheduler(interval);
	};

}).call(this);