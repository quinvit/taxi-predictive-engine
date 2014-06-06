--Abstract
--This engine is able to predict areas (using historical data or time) with low supply
--(taxis or drivers) but has high demands (bookings)

--Specs
--Query which position that 1."has high booking rate > m in the past at current time (near p minutes)" and 2."less taxis < n"
--1. high booking rate > 3 same week day & same time (near p minutes) in the past
--2. less taxis < n at that position

taxis
	-taxi_id
	-fullname
	-cellphone
	
areas
	-area_id
	-latitude
	-longitude
	

--Assume position(x, y) will be a cell(30x30) of a grid.

taxi_positions
	-driver_id
	-latitude
	-longitude

bookings
	-booking_id
	-taxi_id
	-booking_time (DD:MM:YY HH:MM:00)
	-area_id