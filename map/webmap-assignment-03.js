
let myPawprint = L.icon({
  iconUrl: '../img/pawprintIcon.png',
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 15 ], // point of the icon which will correspond to marker's location
  popupAnchor: [0,-13] // point from which the popup should open relative to the iconAnchor
});

let newMarker = L.marker([30.424231, -91.16035], {icon: myPawprint}).addTo(webmap);

newMarker.bindPopup('Animal Sighting');

let coordinates = [
  [30.418276, -91.194283],
  [30.419056, -91.170246],
  [30.409438, -91.166403],
  [30.408854, -91.170020],
  [30.403395, -91.175144],
  [30.404175, -91.183357],
  [30.397221, -91.178685],
  [30.397416, -91.203927]
];

let style = {
  color: 'purple',
  fillColor: 'gold',
  fillOpacity: 0.16
};

let newPolygon = L.polygon(coordinates, style).addTo(webmap);
