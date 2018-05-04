var webmap = L.map('mapid').setView([30.441221, -91.186152], 12);

// create an operational layer that is empty for now
let myLayer = L.layerGroup().addTo(webmap)

// add all of the GeoJSON data to the empty layer we created
function addMyData (feature, layer) {
  myLayer.addLayer(layer)
  // some other code can go here, like adding a popup with layer.bindPopup("Hello")
}

// create an options object that specifies which function to call on each feature
let myLayerOptions = {
  onEachFeature: addMyData
}

// create the GeoJSON layer from myLayerData
L.geoJSON(myLayerData, myLayerOptions).addTo(map)

// an object containing a list of basemaps (makes more sense to use with multiple basemaps)
let basemaps = {
  'My Basemap': streets // replace streets with your basemap object, not shown in this snippet
}

// an object containing a list of operation layers
let layers = {
  'My Layer': myLayer
}

L.control.layers(basemaps, layers).addTo(map)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGFwbHVtZSIsImEiOiJjamczdXpqankwNXFlMnd0NW1yOGhodzhiIn0.s0Lgw6ScO583Nrj4Smmr6w'
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
polyline.bindPopup('LSU Lakes Running Route');

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}

webmap.on('click', logCurrentCoordinates);
