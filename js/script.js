
// // SETTING UP MAP ---------------------------------------------------------------

mapboxgl.accessToken = 'pk.eyJ1IjoiamlhaGt3b24iLCJhIjoiY2ppOWR0b3Q2MHZoeTNwcGFwdjRqcGx2YyJ9.OCQ5S6NvpQir0tyfiUD3vQ';

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

//-------------------date picker && date calculate----------------

$( function() {

  var select=function(dateStr) {
      var d1 = $('#datepicker').datepicker('getDate');
      var d2 = $('#datepickerB').datepicker('getDate');
      var timeDiff = d2 - d1;
      var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      console.log(daysDiff);
  }

    //start date
    $('#datepicker').datepicker({onSelect: select});

    //end Date
    $('#datepickerB').datepicker({onSelect: select});
});


  //calculate how long they travel in NZ



// --------form page function------------------------------------------------------------------------------------------


var nextArrow = document.querySelector('.fa-angle-right');
var nextArrowArray = [];
var previousArrow = document.querySelector('.fa-angle-left');
var previousArrowArray = [];
var formpages = document.querySelectorAll('.page');
var directionsBtn = document.querySelectorAll('.pageDirection');
var formArray = [].slice.call(formpages);
var currentPage = 0 ; // currentpage shows

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
    document.querySelector('.fa-angle-right').style.display = "none";

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


//------------------------ input button
var inputNum = document.querySelector('.input-group-field');
var currentValue = parseInt(inputNum.value);

// when plus is clicked, value increased
$('[data-quantity="plus"]').click(function(e){
  e.preventDefault(); // stop preventing it working as
  if (inputNum.value < 6 ) {
      $('#inputField').val(currentValue +=1); //keep add number when + is clicked
  } else {
      $('#inputField').val(currentValue = 1); //starting form 1
  }
});

// when minus is clicked, value decreased
$('[data-quantity="minus"]').click(function(e){
    e.preventDefault(); // stop preventing it working as
    if (inputNum.value > 1 ) {
        $('#inputField').val(currentValue += -1); //minus -1
    } else {
        $('#inputField').val(currentValue = 1);
    }
});



// buttons checked dynamic
var cars = document.getElementsByClassName('car');
function checked (){
  // carsArray.push(cars);
  for(var i = 0; i < cars.length; i++){
    //when car buttons are clicked. background changes
    cars[i].addEventListener('click', function (){
      console.dir(this);
      this.classList.add('change'); // when car is clicked, background color toggle.
      this.classList.remove('change');
      // this.classList.remove('change');
    } ,false) //event lister
  }//for loop ENDS
}//function ENDS
checked();


//trip.js
$(function() {
    var trip = new Trip([
      {
        sel: $('.mapbox-directions-origin'),
        content: 'Choose your route!',
        position: 'w'
      },
     ],
     {
       delay: -1,
       showCloseBox: true
     });
     trip.start();
  });


//if I'm ready btn is clicked, show Results

var subBtn = document.querySelector('.submitBtn');
var formDiv = document.querySelector('.needs-validation');
  console.dir(formDiv);

  subBtn.addEventListener('click', function (){
    console.log('clicked');
  },false)
