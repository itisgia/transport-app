
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

mapboxgl.accessToken = 'pk.eyJ1IjoiamlhaGt3b24iLCJhIjoiY2ppOWR0b3Q2MHZoeTNwcGFwdjRqcGx2YyJ9.OCQ5S6NvpQir0tyfiUD3vQ';

// works within NZ
// var bounds = [
//   [-34.23025627,172.43635083],
//   [-47.29064213,167.27277661]
// ]
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/jiahkwon/cji9fzmxi2hdd2smlfizy96tl'
// maxBounds: bounds

});


// Add MapboxDirections
map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-right');
//miles to km


//--------form page function------------------------------------------------------------------------------------------


var nextArrow = document.querySelector('.fa-angle-right');
var previousArrow = document.querySelector('.fa-angle-left');
var formpages = document.querySelectorAll('.page');
var currentPage = 0; // currentpage shows



function pageShow (n) {
  formpages[n].style.display = 'block';
  if (n == 0) {
    previousArrow.style.display = 'none';
  } else {
    previousArrow.style.display = 'block';
  }
}

pageShow();

// when next arrow is clicked. show next pages.
nextArrow.addEventListener('click' , nextPageArrow , false);


function nextPageArrow(n) {
    if (n == 1) {

    }


}




//-------------------date picker--------
$( function() {
  $( "#datepicker" ).datepicker();
  $( "#datepickerB" ).datepicker();

});
