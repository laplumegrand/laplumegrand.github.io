
let myPawprint = L.icon({
  iconUrl: '../img/pawprintIcon.png',
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 15 ], // point of the icon which will correspond to marker's location
  popupAnchor: [0,-13] // point from which the popup should open relative to the iconAnchor
})

let newMarker = L.marker([30.424231, -91.16035], {icon: myPawprint}).addTo(webmap);

newMarker.bindPopup('Animal Sighting');
