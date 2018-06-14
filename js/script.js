
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
//
// // SETTING UP MAP ---------------------------------------------------------------
//
// mapboxgl.accessToken = 'pk.eyJ1IjoiamlhaGt3b24iLCJhIjoiY2ppOWR0b3Q2MHZoeTNwcGFwdjRqcGx2YyJ9.OCQ5S6NvpQir0tyfiUD3vQ';
//
// // works within NZ
// // var bounds = [
// //   [-34.23025627,172.43635083],
// //   [-47.29064213,167.27277661]
// // ]
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/jiahkwon/cji9fzmxi2hdd2smlfizy96tl'
// // maxBounds: bounds
//
// });
//
//
// // Add MapboxDirections
// map.addControl(new MapboxDirections({
//     accessToken: mapboxgl.accessToken
// }), 'top-right');
// //miles to km

//-------------------date picker--------

$( function() {
  $( "#datepicker" ).datepicker();
  $( "#datepickerB" ).datepicker();

});

//--fullPage
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//       controlArrows: 'left',
//       css3: true,
//       navigationPosition: 'right',
//       fitToSection: true,
//       sectionsColor : ['#1bbc9b', '#e78205'],
//       menu: '#menu',
//       scrollingSpeed: 1000,
//       continuousVertical: false,
//
//       //design
//       controlArrows: true,
//
//     });
// });
//--------form page function------------------------------------------------------------------------------------------


var nextArrow = document.querySelector('.fa-angle-right');
var previousArrow = document.querySelector('.fa-angle-left');
var formpages = document.querySelectorAll('.page');
var directionsBtn = document.querySelectorAll('.pageDirection');
var formArray = [].slice.call(formpages);
var nextArrowArray = [];
var currentPage = 0 ; // currentpage shows

//storing form page in to Array

  formArray.push(formpages);

 // show just one div

function CurrentPageShow(){
  if (formArray[0]) {
     formArray[1].style.display = 'none';
     formArray[2].style.display = 'none';
     previousArrow.style.display = 'none';
  }
}
CurrentPageShow()


// when next arrow is clicked. show next pages.
nextArrow.addEventListener('click' , nextPageArrow , false);

function nextPageArrow() {
  console.log(formArray);
    nextArrowArray.push(nextArrow);
    console.log(nextArrowArray);
    for (var i = 0; i < nextArrowArray.length; i++) {
      if ((formArray.length == 1 ) < (nextArrowArray.length == 1 )) {
        console.log('1');
        formArray[0].style.display = 'none';
        formArray[1].style.display = 'block';
        formArray[2].style.display = 'none';
      } else if ((formArray.length == 2 ) < (nextArrowArray.length == 2 )) {
        formArray[0].style.display = 'none';
        formArray[1].style.display = 'none';
        formArray[2].style.display = 'block';
      }
    }
}
