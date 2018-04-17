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
]).addTo(webmap);

var polylinePoints = [
            new L.LatLng(30.408893, -91.170057),
            new L.LatLng(30.407773, -91.169034),
            new L.LatLng(30.407908, -91.168128),
            new L.LatLng(30.407535, -91.166869),
            new L.LatLng(30.407840, -91.166200),
            new L.LatLng(30.407840, -91.165885),
            new L.LatLng(30.407331, -91.164744),
            new L.LatLng(30.409979, -91.162264),
            new L.LatLng(30.410997, -91.163563),
            new L.LatLng(30.411676, -91.163721),
            new L.LatLng(30.414018, -91.162776),
            new L.LatLng(30.414730, -91.162737),
            new L.LatLng(30.414493, -91.162264),
            new L.LatLng(30.412694, -91.159588)
         ];

var polylineOptions = {
                       color: 'purple',
                       weight: 5,
                       opacity: 0.75
                     };

var polyline = new L.Polyline(polylinePoints, polylineOptions);

webmap.addLayer(polyline);


polygon.bindPopup('Downtown Baton Rouge');
marker.bindPopup('LSU Lakes/BREC Park');

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}

webmap.on('click', logCurrentCoordinates);
