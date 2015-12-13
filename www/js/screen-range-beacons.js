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
                    if(beacon.proximity === 1){ // morado



                        //alert("Pop 1");    

                        // Llamada a pop out 1

                        $$('.popup1').on('open', function () {
                        	console.log('Popup 1 se abre.')
                        });

                        // Parar busqueda
                        app.stopRangingBeacons();

                     }

                }
                else if(beacon.major === 12058) 
                {
                    if(beacon.proximity === 1){ // celeste
                    	
                        //alert("Pop 2");    

                         // Llamada a pop out  2
                         $$('.popup2').on('open', function () {
                        	console.log('Popup 2 se abre.')
                        });

                         // Parar busqueda
                        app.stopRangingBeacons();




                    }


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
