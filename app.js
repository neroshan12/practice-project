// console.log('test');
// var config = require('/config.json')
// console.log(config);

var xhttp = new XMLHttpRequest();
xhttp.open("GET", `https://maps.googleapis.com/maps/api/distancematrix/json?origins=51.5173471,-0.073269&destinations=51.5317,-0.0668&mode=walking&key=${googleMapsAPIKey}`, false);
xhttp.send();
var googleResponse = xhttp.response;
var googleJSON = JSON.parse(googleResponse);

document.getElementById("distance").innerHTML = googleJSON.rows[0].elements[0].distance['value'] + 'm';
