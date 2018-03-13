// initialize the map
var map = L.map("map").setView([39.7392, -104.9903], 14);

// load a tile layer
L.tileLayer("https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}", {
  attribution:
    'Imagery from <a href="http://giscience.uni-hd.de/">GIS</a> Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 20,
  minZoom: 6
}).addTo(map);
