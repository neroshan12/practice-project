// console.log('test');
// var config = require('/config.json')
// console.log(config);



var currentLocation;
// var googleResponse;
// var googleJSON;
navigator.geolocation.getCurrentPosition(function(position) {
  currentLocation = (`${position.coords.latitude}, ${position.coords.longitude}`);
  var hcf = "51.5316758,-0.0690335";
  var lbc = "51.5280202,-0.0534266";
  var lsc = "51.5175798,-0.0802112";
  var gc = "51.5210263,-0.0838455";
  var locations = {
    'hcf': {
    'coords':"51.5316758,-0.0690335",
    'divElement': 'hcf-distance'
  }
}
  writeDistanceToScreen(locations['hcf']['coords'], locations['hcf']['divElement'])
  writeDistanceToScreen(lbc, 'lbc-distance')
  writeDistanceToScreen(lsc, 'lsc-distance')
  writeDistanceToScreen(gc, 'gc-distance')

  callGoogleForDistance(currentLocation, hcf);
});

// console.log(currentLocation)
// console.log('Hello')
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
  // displayDistanceFromJSON(googleJSON);
}

function displayDistance(distance, elementID) {
  document.getElementById(elementID).innerHTML = distance + 'm';
}

// function displayDistanceFromJSON(JSONresponse) {
//   document.getElementById("hcf-distance").innerHTML = JSONresponse.rows[0].elements[0].distance['value'] + 'm';
// }
