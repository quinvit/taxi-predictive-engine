Taxi predictive engine
====================

Predictive engine for GrapTaxi

### Usage
```

// See configuration.json

var engine = require('taxi-predictive-engine');
engine.on("message", function(prediction){
	// had been put to redis queue "predictions" already
	console.log(prediction);
});

```

### Running test
```
npm test
```