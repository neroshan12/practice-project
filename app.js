// console.log('test');
// var config = require('/config.json')
// console.log(config);



// var currentLocation;
// var googleResponse;
// var googleJSON;
navigator.geolocation.getCurrentPosition(function(position) {
  currentLocation = (`${position.coords.latitude}, ${position.coords.longitude}`);
  callGoogleForDistance(currentLocation);
});

// console.log(currentLocation)
// console.log('Hello')


function callGoogleForDistance(location){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${location}&destinations=51.5317,-0.0668&mode=walking&key=${googleMapsAPIKey}`, false);
  xhttp.send();
  googleResponse = xhttp.response;
  googleJSON = JSON.parse(googleResponse);
  displayDistanceFromJSON(googleJSON);
}

function displayDistanceFromJSON(JSONresponse) {
  document.getElementById("hcf-distance").innerHTML = JSONresponse.rows[0].elements[0].distance['value'] + 'm';
}
