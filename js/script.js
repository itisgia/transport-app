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

//-------------------date picker--------

$( function() {
  $( "#datepicker" ).datepicker();
  $( "#datepickerB" ).datepicker();

});

//date validation


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
// --------form page function------------------------------------------------------------------------------------------


var nextArrow = document.querySelector('.fa-angle-right');
var nextArrowArray = [];
var previousArrow = document.querySelector('.fa-angle-left');
var previousArrowArray = [];
var formpages = document.querySelectorAll('.page');
var directionsBtn = document.querySelectorAll('.pageDirection');
var formArray = [].slice.call(formpages);
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


//validate Form
var text;
function validateForm(){
  var vali = document.getElementById('datepicker');
  if (vali.value == '') {
    text = 'Please input something!'
    // alert('add start Date')
  }
   document.getElementById('invalidText').innerHTML = text;
}




//---------------------------- form validation and page steps form w3 school

var x = document.getElementsByClassName('page');
var currentTab = 0; // Current tab is set to be the first tab (0)

  showTab(currentTab); // Display the crurrent tab

  function showTab(n) {
  // This function will display the specified tab of the form...
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.querySelector('.fa-angle-left').style.display = "none";
  } else {
    document.querySelector('.fa-angle-left').style.display = "block";
  }
  if (n == (x.length - 1)) {
    document.querySelector('.fa-angle-right').style.display = "inline";
  }

  }


  function nextPrev(n) {
  // This function will figure out which tab to display

  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.querySelector('.needs-validation').submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  }

  function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  var x = document.getElementsByClassName('page');
  y = x[currentTab].getElementsByTagName('input');
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == '') {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  return valid; // return the valid status
  }

// form steps form me. logical thingking needed
// // when next arrow is clicked. show next pages.
// nextArrow.addEventListener('click' , nextPageArrow , false);
// previousArrow.addEventListener('click' , backArrow , false);
//
// // when right arrow is clicked, move to next page
// function nextPageArrow() {
//   console.log(formArray);
//     nextArrowArray.push(nextArrow);
//     console.log(nextArrowArray);
//     //hide and show divs
//       previousArrow.style.display = 'block';
//       if ((formArray.length == 1 ) < (nextArrowArray.length == 1 )) {
//         formArray[0].style.display = 'none';
//         formArray[1].style.display = 'block';
//         formArray[2].style.display = 'none';
//
//       } else if ((formArray.length == 2 ) < (nextArrowArray.length ==2 )) {
//         formArray[0].style.display = 'none';
//         formArray[1].style.display = 'none';
//         formArray[2].style.display = 'block';
//       }
//  validateForm();
// }
//
//
// function backArrow () {
//   previousArrowArray.push(previousArrow);
//   console.log(previousArrowArray);
//     if ((formArray[0] ) && (previousArrowArray[0]) ) {
//       formArray[0].style.display = 'block';
//       formArray[1].style.display = 'none';
//       formArray[2].style.display = 'none';
//     } else if ((formArray.length == 2) < (previousArrowArray.length == 2)) {
//       formArray[0].style.display = 'none';
//       formArray[1].style.display = 'block';
//       formArray[2].style.display = 'none';
//     }
// }


//------------------------ input button
var inputNum = document.querySelector('.input-group-field');
var currentValue = parseInt(inputNum.value);

// when plus is clicked, value increased
$('[data-quantity="plus"]').click(function(e){
  e.preventDefault(); // stop preventing it working as
  if (inputNum.value < 6 ) {
      $('#inputField').val(currentValue +=1);
  } else {
      $('#inputField').val(currentValue = 1);
  }
});

// when minus is clicked, value decreased
$('[data-quantity="minus"]').click(function(e){
    e.preventDefault(); // stop preventing it working as
    if (inputNum.value > 1 ) {
        $('#inputField').val(currentValue += -1);
    } else {
        $('#inputField').val(currentValue = 1);
    }
});



// buttons checked dynamic
var cars = document.getElementsByClassName('car');
var carsArray = [];
console.log(cars);

function checked (){
  carsArray.push(cars);
  console.log(carsArray[1].value);
}
checked();
