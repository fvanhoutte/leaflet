var map = L.map('map');
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © OpenStreetMap contributors';
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
map.setView([49.4003, 2.8], 16);
map.addLayer(osm);
var marker = L.marker([49.4003, 2.8]).addTo(map);
marker.bindPopup("<b>GSU - UR06</b><br>21/11/2018 - Initiation au websig").openPopup();