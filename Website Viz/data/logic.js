// An array of cities and their locations
var cities = [
  {
    name: "FC Barcelona",
    location: [41.3851, 2.1734]
  },
  {
    name: "Real Madrid",
    location: [40.7891, -3.2002]
  },
  {
    name: "Manchester United",
    location: [52.5074, 0.1278]
  },
  {
    name: "London",
    location: [51.5074, 0.1278]
  },
  {
    name: "Milan",
    location: [45.4642, 9.1900]
  },
  {
    name: "Chelsea",
    location: [51.5074, 0.1278]
  },
  {
    name: "Liverpool",
    location: [51.4084, 0.9916]
  },
  {
    name: "Juventus",
    location: [45.0703, 7.6869]
  },
  {
    name: "Man City",
    location: [51.8074, 0.1278]
  },
  {
    name: "Tottenham",
    location: [51.5074, 0.1456]
  }
];

// An array which will be used to store created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  cityMarkers.push(
    L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Light: light,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [48.8566, 2.2137],
  zoom: 6,
  layers: [light, cityLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
