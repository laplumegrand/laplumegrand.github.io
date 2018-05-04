var webmap = L.map('mapid').setView([48.855591, 2.343107], 10);

let layer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGFwbHVtZSIsImEiOiJjamczdXpqankwNXFlMnd0NW1yOGhodzhiIn0.s0Lgw6ScO583Nrj4Smmr6w'
}).addTo(webmap);

let topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(webmap);

let darkLayer = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(webmap);

let JsonMarkers = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"museedOrsay","lat":48.859854,"lon":2.326155,"where":"inside"},"geometry":null},{"type":"Feature","properties":{"name":"laTour","lat":48.858159,"lon":2.294355,"where":"outside"},"geometry":null},{"type":"Feature","properties":{"name":"pontDesArts","lat":48.858308,"lon":2.337503,"where":"outside"},"geometry":null},{"type":"Feature","properties":{"name":"pontNeuf","lat":48.857997,"lon":2.341966,"where":"outside"},"geometry":null},{"type":"Feature","properties":{"name":"sacreCoeur","lat":48.886484,"lon":2.343106,"where":"inside"},"geometry":null},{"type":"Feature","properties":{"name":"notreDame","lat":48.853239,"lon":2.349224,"where":"inside"},"geometry":null},{"type":"Feature","properties":{"name":"larc","lat":48.873782,"lon":2.295006,"where":"outside"},"geometry":null},{"type":"Feature","properties":{"name":"catacombes","lat":48.833776,"lon":2.332337,"where":"underground"},"geometry":null},{"type":"Feature","properties":{"name":"fontaine","lat":48.853156,"lon":2.332337,"where":"outside"},"geometry":null},{"type":"Feature","properties":{"name":"leMur","lat":48.884767,"lon":2.338532,"where":"outside"},"geometry":null},{"type":"Feature","properties":{"name":"palaisLux","lat":48.848062,"lon":2.337272,"where":"inside"},"geometry":null},{"type":"Feature","properties":{"name":"pomp","lat":48.860525,"lon":2.352281,"where":"inside"},"geometry":null}]}


L.geoJSON(JsonMarkers).addTo(webmap);

function addData (features, layers) {
  myLayer.addLayer(layers)
  // some other code can go here, like adding a popup with layer.bindPopup("Hello")
};

// create an options object that specifies which function to call on each feature
let myLayerOptions = {
  onEachFeature: addData
}

// create the GeoJSON layer from myLayerData
L.geoJSON(myLayerData, myLayerOptions).addTo(map);

// an object containing a list of basemaps (makes more sense to use with multiple basemaps)
let basemaps = {
  "Basemap": layer,
  "Topographic Map": topoLayer,
  "Dark Map": darkLayer
}

L.control.layers(basemaps).addTo(map);

let style = function (feature){
  let inOrOut = feature.properties.where

  let myIcon = L.icon({
    iconUrl: 'castle.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15 ],
    popupAnchor: [0,-13]
  })

  if (inOrOut = "outside"){
    iconUrl ="leaf.png"
  }

  if (inOrOut = "underground"){
    iconUrl = "skull.png"
  }
}
_______________________________________________________________________________________________________

let jardinLux = L.polygon([
  [48.849062, 2.338535],
  [48.847169, 2.340380],
  [48.844090, 2.338749],
  [48.844287, 2.337504],
  [48.844417, 2.332946],
  [48.844974, 2.332407],
  [48.848625, 2.332611],
  [48.849200, 2.335601]
], style).addTo(webmap);

let jardinTul = L.polygon([
  [48.866397, 2.323481],
  [48.863839, 2.321579],
  [48.861013, 2.329918],
  [48.863772, 2.331902]
], style).addTo(webmap);

let museeLouvre = L.polygon([
  [48.863660, 2.332188],
  [48.860882, 2.340636],
  [48.859111, 2.339728],
  [48.859411, 2.336503],
  [48.860963, 2.330194]
], style).addTo(webmap);

let champs = L.polyline([
  [48.865677, 2.320667],
  [48.873631, 2.295707]
]).addTo(webmap);

let montmartre = L.polygon([
  [48.884687, 2.329762],
  [48.882146, 2.339590],
  [48.883867, 2.349406],
  [48.888341, 2.349489],
  [48.888383, 2.347973],
  [48.889859, 2.342986],
  [48.889481, 2.335004],
  [48.886579, 2.332556]
], style).addTo(webmap);

var polylineOptions = {
   color: 'purple',
   weight: 5,
  opacity: 0.75
 };

let style = {
  color: "cyan",
  weight: 5,
  opacity: 0.3};


jardinLux.bindPopup('Le Jardin du Luxembourg');
jardinTul.bindPopup('Le Jardin des Tuileries');
museeLouvre.bindPopup('Le Musée du Louvre');
champs.bindPopup("Les Champs-Elysées");
montmartre.bindPopup("l'Arrondissement de Montmartre");

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
};

webmap.on('click', logCurrentCoordinates);
