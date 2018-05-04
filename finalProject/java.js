var webmap = L.map('mapid').setView([48.855591, 2.343107], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGFwbHVtZSIsImEiOiJjamczdXpqankwNXFlMnd0NW1yOGhodzhiIn0.s0Lgw6ScO583Nrj4Smmr6w'
}).addTo(webmap);

let myLayer = L.layerGroup().addTo(webmap)

L.geoJSON(JsonMarkers).addTo(webmap);

function addData (features, layers) {
  myLayer.addLayer(layers)
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
]).addTo(webmap);

let jardinTul = L.polygon([
  [48.866397, 2.323481],
  [48.863839, 2.321579],
  [48.861013, 2.329918],
  [48.863772, 2.331902]
]).addTo(webmap);

let museeLouvre = L.polygon([
  [48.863660, 2.332188],
  [48.860882, 2.340636],
  [48.859111, 2.339728],
  [48.859411, 2.336503],
  [48.860963, 2.330194]
]).addTo(webmap);

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
]).addTo(webmap);

var polylineOptions = {
                       color: 'purple',
                       weight: 5,
                       opacity: 0.75
                     };

jardinLux.bindPopup('Le Jardin du Luxembourg');
jardinTul.bindPopup('Le Jardin des Tuileries');
museeLouvre.bindPopup('Le Musée du Louvre');
champs.bindPopup("Les Champs-Elysées")
montmartre.bindPopup("l'Arrondissement de Montmartre")

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}

webmap.on('click', logCurrentCoordinates);
