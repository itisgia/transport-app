

//variables

var day = 0;
var distance = 0;
var formDiv = document.querySelector('.needs-validation');



// // SETTING UP MAP ---------------------------------------------------------------

mapboxgl.accessToken = 'pk.eyJ1IjoiamlhaGt3b24iLCJhIjoiY2ppOWR0b3Q2MHZoeTNwcGFwdjRqcGx2YyJ9.OCQ5S6NvpQir0tyfiUD3vQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jiahkwon/cji9fzmxi2hdd2smlfizy96tl'
    // maxBounds: bounds
});

map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric'//miles to km
}), 'top-right');



//------------------date picker && date calculate----------------


//code refactoring
$( function() {
  var select=function(dateStr) {
      var resultText = document.querySelector('.datechoosen');
      var d1 = $('#datepicker').datepicker('getDate');
      var d2 = $('#datepickerB').datepicker('getDate');
      var timeDiff = d2 - d1;
      var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      console.log(daysDiff);
      resultText.innerText = 'You\'re traveling ' + daysDiff + ' days with us 🧡'
      if ( daysDiff > 15) {
        alert('you\'ve selected more than 15 days 👻')
      }
  }
    //start date
    $('#datepicker').datepicker({
        onSelect: select
    });
    //end Date
    $('#datepickerB').datepicker({
        onSelect: select});
});


// result pagge
$('.submitBtn').click(function(){
  $('.needs-validation').hide();
  $('.resultDiv').show();
  $('.bottomFIx').hide();
})

// --------form page function------------------------------------------------------------------------------------------


var nextArrow = document.querySelector('.fa-angle-right');
var previousArrow = document.querySelector('.fa-angle-left');
var directionsBtn = document.querySelectorAll('.pageDirection');
var currentPage = 0 ; // currentpage shows

//validation vars
var directionInput = document.getElementById('mapbox-directions-origin-input');
var directionInputB = document.getElementById('mapbox-directions-destination-input');
var direcValueA = directionInput.childNodes["0"].childNodes[1];
var direcValueB = directionInputB.childNodes["0"].childNodes[1];


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
      if (n == 1 && !validateForm())
      return false;

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
    valueSelection();

  }

  function validateForm() {
  // This function deals with validation of the form fields
      var x, y, i, valid = true;
      var x = document.getElementsByClassName('page');
      y = x[currentTab].getElementsByClassName('datePick');
      console.log(y);
  // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false
          valid = false;
        }
      }
      if (direcValueA.value == "") {
          btnValidation ()
       valid = false;
    } else if (direcValueB.value == "") {
      btnValidation ()
      valid = false;

    }
      return valid; // return the valid status
  }

function btnValidation () {
   $('.fa-angle-right').attr('disabled',true);
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
        $('#inputField').val(currentValue = 6); //maximum 6
    }
});

// when minus is clicked, value decreased
$('[data-quantity="minus"]').click(function(e){
    e.preventDefault(); // stop preventing it working as
    if (inputNum.value > 1 ) {
        $('#inputField').val(currentValue += -1); //minus -1
    } else {
        $('#inputField').val(currentValue = 1); //minimum 1
    }
});


// buttons checked dynamic
var cars = document.getElementsByClassName('car');
function checked (){
    for(var i = 0; i < cars.length; i++){
      //when car buttons are clicked. background changes
      cars[i].addEventListener('click', function (){
        console.dir(this);
        this.classList.toggle('change'); // when car is clicked, background color toggle.
      } ,false) //event lister
    }//for loop ENDS
}//function ENDS
checked();

// trip.js

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

// car selection value
function valueSelection() {
var getInputValue = document.getElementById('inputField').value;

    if ( getInputValue == 1 ) {
       $('.bikeDisable')["0"].style.display = 'none';
       $('.smallcarDisable')["0"].style.display = 'none';
       $('.largecarDisable')["0"].style.display = 'none';
       $('.motorHomeDisable')["0"].style.display = 'block';
       $('#motorHome').attr('disabled',true);
    } else if ( getInputValue == 2){
      $('.bikeDisable')["0"].style.display = 'block';
      $('.smallcarDisable')["0"].style.display = 'none';
      $('.largecarDisable')["0"].style.display = 'none';
      $('.motorHomeDisable')["0"].style.display = 'none';
      $('#bike').attr('disabled',true);
      $('#motorHome').attr('disabled',false);
    } else if ( getInputValue == 3 ) {
      $('.bikeDisable')["0"].style.display = 'block';
      $('.smallcarDisable')["0"].style.display = 'block';
      $('.largecarDisable')["0"].style.display = 'none';
      $('.motorHomeDisable')["0"].style.display = 'none';
      $('#bike').attr('disabled',true);
      $('#smallCar').attr('disabled',true);
      $('#motorHome').attr('disabled',false);
    } else if (getInputValue == 4) {
       $('.bikeDisable')["0"].style.display = 'block';
       $('.largecarDisable')["0"].style.display = 'none';
       $('.smallcarDisable')["0"].style.display = 'block';
       $('.motorHomeDisable')["0"].style.display = 'none';
       $('#bike').attr('disabled',true);
       $('#smallCar').attr('disabled',true);;
       $('#motorHome').attr('disabled',false);
    } else if (getInputValue == 5) {
      $('.bikeDisable')["0"].style.display = 'block';
      $('.smallcarDisable')["0"].style.display = 'block';
      $('.largecarDisable')["0"].style.display = 'none';
      $('.motorHomeDisable')["0"].style.display = 'none';
      $('#bike').attr('disabled',true);
      $('#smallCar').attr('disabled',true);
      $('#largeCar').attr('disabled',false);
      $('#motorHome').attr('disabled',false);

    }else {
      $('.bikeDisable')["0"].style.display = 'block';
      $('.smallcarDisable')["0"].style.display = 'block';
      $('.largecarDisable')["0"].style.display = 'block  ';
      $('.motorHomeDisable')["0"].style.display = 'none';
      $('#bike').attr('disabled',true);
      $('#smallCar').attr('disabled',true);
      $('#largeCar').attr('disabled',true);
      $('#motorHome').attr('disabled',false);
    }
}




//if I'm ready btn is clicked, show Results
