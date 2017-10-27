# Attractour
#### Location based alerts for nearby attractions
---------------------------

#### Team Members:
[Rob Collins](https://github.com/racoll) | [Nero Siva](https://github.com/neroshan12) | [Rory Hodgson](https://github.com/rorybot) | [Luan van Pletsen](https://github.com/LuanvP)

MVP of a location based tourist app which alerts users about nearby attractions in a new city. This implementation was developed in a week, and presently only works in the browser. On load, the page displays the distance to various pre-defined local attractions, and by clicking on the 'Directions' button below any attraction the user is redirected to the Google Maps page for getting directions to each location. 

## Getting Started
------------------
- npm install
- http-server
Alternatively, a production copy is hosted [here](http://attractour.herokuapp.com/)
## Built With
----------
- Node.js
- HTTP-Server
- Bootstrap


## Technical Challenges
--------------------
- Testing: Our app currently involves very little model logic since it is essentially combining standard browser functions with API calls to Google servers. As a result, the codebase is currently untested. Time was spent trying to mock the API calls, although given the time restrictions on the project, we prioritised spiking code to get a more complete MVC.

-CORS: When sending API requests to Google's servers to determine the distances to places, we needed to use a browser extension which allowed CORS for these to work. This presently procludes using the site on mobile devices which cannot use this extension.

## Future features
------------------
The application was finally meant to be a mobile app which could run in the background and notify the user once they were within a certain range of a local attraction. To this end, the app was ported to iOS using Cordova, for which the repo can be found [here:](https://github.com/racoll/attractour). Since we were unable to solve the CORS issue for the browser version, the same problem was encountered there, preventing it functioning. 

In future development it is hoped that the locations would not simply be hard-coded into the design, but could be scraped from TripAdvisor or similar sites according to user rating, with checks to ensure that the attractions are open.
