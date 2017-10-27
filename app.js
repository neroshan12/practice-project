var locations = {
  'hcf': {
  'coords':"51.5316758,-0.0690335",
  'divElement': 'hcf-distance',
  'searchName': 'hackney-city-farm'
  },
  'lbc': {
    'coords':"51.5280202,-0.0534266",
    'divElement': 'lbc-distance',
    'searchName': 'london-buddhist-centre'
  },
  'lsc': {
    'coords':"51.5175798,-0.0802112",
    'divElement': 'lsc-distance',
    'searchName': 'london-steakhouse-company-middlesex-st'
  },
  'gc': {
    'coords':"51.5210263,-0.0838455",
    'divElement': 'gc-distance',
    'searchName': 'google-campus-london'
  }
};
var locationNames = ['hcf','lbc','lsc','gc']
var currentLocation;

updateLocationAndDistances();

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


var locationsArray = ['hcf','gc','lbc','lsc']

for (var i= 0 ;i < locationsArray.length ; i++) {

  (function(){
    var button = document.getElementById(locationsArray[i]+'-maps')
    var fixedLocation = i

    button.addEventListener('click', function(){
    redirectToMaps(locationsArray[fixedLocation])
    });

  }());
    // }

};


function redirectToMaps(destination) {
  // hcfCoords = locations.hcf.coords
  finalDestination = locations[destination].searchName
  window.location.href = `https://www.google.com/maps/dir/?api=1&origin=${currentLocation}&destination=${finalDestination}&travelmode=walking`;
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
