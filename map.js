//leaflet
var map = L.map('Map', {
  center: [51.0447, -114.0719],
  zoom:11
});

//token
var accesstoken = 'pk.eyJ1IjoiY2hyaXNrY2NobyIsImEiOiJja200ZGE3YzEwM2hhMm9wbThweHVpbmdnIn0.WK32LPKYrtmevgs6emkIrQ';

//mapbox
var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/chriskccho/ckm5mhox13uwf17lfi96dnumh/tiles/256/{z}/{x}/{y}?access_token=' + accesstoken, {
  tileSize:512,
  zoomOffset:-1,
  attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

//OpenStreetMap
var openstreet=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  tileSize:512,
  zoomOffset:-1,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})


mapbox.addTo(map);

//toggle
L.control.layers({
  "Mapbox":mapbox,
  "OpenStreetMap":openstreet,
}, null, {
  collapsed: false
}).addTo(map);
