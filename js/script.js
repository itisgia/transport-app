
//Data
var vehicles = {
  motorbike :{
    person : 1 ,
    day :[1, 2, 3, 4, 5],
    price : 109,
    distance : 100,
    fuel : 3.7

  },
  smallCard : {
    person : [1,2],
    day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    price : 129,
    distance : 100,
    fuel : 8.5

  },
  largeCar : {
    person : [1, 2, 3, 4, 5],
    day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    price : 144,
    distance : 100,
    fuel : 9.7
  },

  motorHome : {
    person : [2, 3, 4, 5, 6],
    day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 , 16],
    price : 200,
    distance : 100,
    fuel : 17
  }
}

// SETTING UP MAP ---------------------------------------------------------------
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXRpc2dpYSIsImEiOiJjamk0MnpkZDgwMXJ6M3Jta3U5djF4aGtoIn0.kT6tUJYJk4_0LMg6INadbA'
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/itisgia/cji43brtl104l2rofjzx1z6ao', // stylesheet location
      center: [174.780651, -41.278932], // starting position [lng, lat]
      zoom: 6.76// starting zoom
    });
