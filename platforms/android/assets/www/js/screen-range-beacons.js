// Range beacons screen.
;(function(app)
{
	app.startRangingBeacons = function()
	{
		function onRange(beaconInfo)
		{
			displayBeconInfo(beaconInfo);
		}

		function onError(errorMessage)
		{
			console.log('Range error: ' + errorMessage);
		}

		function displayBeconInfo(beaconInfo)
        {
			// Sort beacons by distance.
			beaconInfo.beacons.sort(function(beacon1, beacon2) {
				return beacon1.distance > beacon2.distance; });

			// Generate HTML for beacons.
			$.each(beaconInfo.beacons, function(key, beacon)
			{
                if(beacon.major === 2660)
                {
                    if(beacon.proximity === 1)
                        alert("Encontraste el jabon de favio!!");        
                }
                else if(beacon.major === 12058)
                {
                    if(beacon.proximity === 1)
                        alert("Encontraste el jabon de crayon!!");        
                }
			});
		};

		function createBeaconHTML(beacon)
		{
			var colorClasses = app.beaconColorStyle(beacon.color);
			var htm = '<div class="' + colorClasses + '">'
				+ '<table><tr><td>Mayor</td><td>' + beacon.major
				+ '</td></tr><tr><td>Menor</td><td>' + beacon.minor
				+ '</td></tr><tr><td>RSSI</td><td>' + beacon.rssi
			if (beacon.proximity)
			{
				htm += '</td></tr><tr><td>Priximidad</td><td>'
					+ app.formatProximity(beacon.proximity)
			}
			if (beacon.distance)
			{
				htm += '</td></tr><tr><td>Distancia</td><td>'
					+ app.formatDistance(beacon.distance)
			}
			htm += '</td></tr></table></div>';
			return htm;
		};

		// Request authorisation.
		estimote.beacons.requestAlwaysAuthorization();

		// Start ranging.
		estimote.beacons.startRangingBeaconsInRegion(
			{}, // Empty region matches all beacons.
			onRange,
			onError);
	};

	app.stopRangingBeacons = function()
	{
		estimote.beacons.stopRangingBeaconsInRegion({});
		app.showHomeScreen();
	};

})(app);
