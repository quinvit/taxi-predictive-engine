Taxi predictive engine
====================

Predictive engine for GrapTaxi

### Usage
```
var engine = require('taxi-predictive-engine');
engine.on("message", function(predictions){
	console.log(predictions);
	// push to Redis queue
});

```

### Running test
```
npm test
```