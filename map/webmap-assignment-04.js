var webmap = L.map('mapid').setView([30.441221, -91.186152], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGFwbHVtZSIsImEiOiJjamczdXpqankwNXFlMnd0NW1yOGhodzhiIn0.s0Lgw6ScO583Nrj4Smmr6w'
}).addTo(webmap);

L.geoJSON(myGEO).addTo(webmap);

L.geoJSON(myGEO, {style: {color: "blue"}}).addTo(webmap);
