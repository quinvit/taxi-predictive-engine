/*
Copyright (c) Qui.Nguyen
Author: Qui.Nguyen <quinvit@yahoo.com>
*/

var engine = require('./index');
engine.on('message', function(message){
	console.log(message);
});

engine.start();
