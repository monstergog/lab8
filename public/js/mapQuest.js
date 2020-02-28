function initMap() {
	L.mapquest.key = 'RNBFRFD0GxX2UeOhnfjxyGGAsQoLQ3bN';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	  center: [32.88,-117.236],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 14,
	  zoomControl: false
	});
	
	// Add a marker to the map
	L.marker([32.88,-117.236]).addTo(map);
}