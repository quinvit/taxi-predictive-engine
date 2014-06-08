Taxi predictive engine
====================

Predictive engine for GrapTaxi

### Usage
```

// See configuration.json

var engine = require('taxi-predictive-engine');
engine.on("message", function(prediction){
	console.log(prediction);
});

```

### Running test
```
npm test
```