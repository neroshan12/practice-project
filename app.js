var locations = {
  'hcf': {
  'coords':"51.5316758,-0.0690335",
  'divElement': 'hcf-distance'
  },
  'lbc': {
    'coords':"51.5280202,-0.0534266",
    'divElement': 'lbc-distance'
  },
  'lsc': {
    'coords':"51.5175798,-0.0802112",
    'divElement': 'lsc-distance',
  },
  'gc': {
    'coords':"51.5210263,-0.0838455",
    'divElement': 'gc-distance',
  }
};
var locationNames = ['hcf','lbc','lsc','gc']
var currentLocation;

// updateLocationAndDistances();

var updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', updateLocationAndDistances);

function updateLocationAndDistances() {
  console.log('hey!');
  navigator.geolocation.getCurrentPosition(function(position) {
  currentLocation = (`${position.coords.latitude}, ${position.coords.longitude}`);
  for (var location in locations) {
    if (locations.hasOwnProperty(location)){
      writeDistanceToScreen(locations[location].coords, locations[location].divElement);
    }
  }
});}




var hcfDirectionsButton = document.getElementById('hcf-maps');
hcfDirectionsButton.addEventListener('click', function(){
  redirectToMaps('hackney-city-farm')
});

var gcDirectionsButton = document.getElementById('gc-maps');
gcDirectionsButton.addEventListener('click', function(){
  redirectToMaps('google-campus-london')
});

var lbcDirectionsButton = document.getElementById('lbc-maps');
lbcDirectionsButton.addEventListener('click', function(){
  redirectToMaps('london-buddhist-centre')
});

var lscDirectionsButton = document.getElementById('lsc-maps');
lscDirectionsButton.addEventListener('click', function(){
  redirectToMaps('london-steakhouse-company')
});

function redirectToMaps(destination) {
  // hcfCoords = locations.hcf.coords
  window.location.href = `http://maps.google.com?q=${destination}`;
  ;}





function writeDistanceToScreen(destinationCoordinates, elementID) {
  var dist = callGoogleForDistance(currentLocation, destinationCoordinates)
  displayDistance(dist, elementID)
}

function callGoogleForDistance(location, destination){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${location}&destinations=${destination}&mode=walking&key=${googleMapsAPIKey}`, false);
  xhttp.send();
  googleResponse = xhttp.response;
  googleJSON = JSON.parse(googleResponse);
  return googleJSON.rows[0].elements[0].distance['value'];
}

function displayDistance(distance, elementID) {
  document.getElementById(elementID).innerHTML = distance + 'm';
  console.log('hey again!');
}
