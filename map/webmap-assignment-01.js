var webmap = L.map('mapid').setView([30.441221, -91.186152], 10);

L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	apikey: '<your apikey>',
	maxZoom: 22
}).addTo(webmap);

let marker = L.marker([30.431246, -91.168401]).addTo(webmap);

let polygon = L.polygon([
  [30.439775, -91.190659],
  [30.440066, -91.179530],
  [30.458401, -91.180856],
  [30.458013, -91.189962]
]).addTo(mymap);

polygon.bindPopup('Downtown Baton Rouge');
marker.bindPopup('LSU Lakes/BREC Park');

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates);
