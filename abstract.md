###Abstract
```
--This engine is able to predict areas (using historical data or time) with low supply
--(taxis or drivers) but has high demands (bookings)
```

###Specification
```
--Predict each t minutes
--Query which area that "has high booking rate > 5 in the past 
--at the current time (around 30 minutes)" and "less available taxis < 2"
--1. high booking rate >= 5 same week day & same time (near 30 minutes) in the past
--2. less available taxis <= 2 at that area within 1km radius
--3. notify taxis within 5km radius
```

###DB Design
```

taxis
	-taxi_id
	-taxi_number

drivers
	-driver_id
	-fullname
	-cellphone
	-taxi_id

areas
	-area_id
	-address
	-latitude
	-longitude
	

--Assume position(x, y) will be a cell(1km x 1km) in a grid.

taxi_positions
	-taxi_id
	-latitude
	-longitude

bookings
	-booking_id
	-taxi_id
	-booking_time (DD:MM:YY HH:MM:00)
	-area_id

```
