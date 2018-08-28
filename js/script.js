 // vars
    var inputNum = document.querySelector('.input-group-field');
    var currentValue = parseInt(inputNum.value);
    var directionInput = document.getElementById('mapbox-directions-origin-input');
    var directionInputB = document.getElementById('mapbox-directions-destination-input');
    var direcValueA = directionInput.childNodes["0"].childNodes[1];
    var direcValueB = directionInputB.childNodes["0"].childNodes[1];
    var getInputValue = document.getElementById('inputField').value;


  //------------------date picker && date calculate----------------

  // get data calculate and push to result page
    var select = function(dateStr) {
        var resultText = document.querySelector('.datechoosen');
        var d1 = $('#datepicker').datepicker('getDate');
        var d2 = $('#datepickerB').datepicker('getDate');
        var timeDiff = d2 - d1;
        var daysDiff = Math.floor( timeDiff / ( 1000 * 60 * 60 * 24 ));
        var day = parseInt(daysDiff);
            resultText.innerText = 'You\'re traveling ' + day + ' days';
            $('.totalDays').text('Travel days: ' + day + ' days');
             // vehicle selection depends on how long people travel
                function datavehicle() {
                  var xIcons = document.querySelectorAll('.fa-times');
                      // vehicle selectuon can be disabled depends on days
                      if ( day < 6 ) {
                          $('#bike').attr('disabled', false);
                          $('#smallCar').attr('disabled', false);
                          $('#largeCar').attr('disabled', false);
                          $('#motorHome').attr('disabled', false);
                          for(var i = 0; i < xicons.length; i++){
                              xIcons[i].style.display = 'none';
                          } // set default display as none
                      } else if (( day > 6 ) && ( day < 11 )) {
                          $('#bike').attr('disabled', true);
                          xIcons["0"].style.display = 'block';
                      } else if ( day > 11 ) {
                          xIcons["0"].style.display = 'block';
                          xIcons["1"].style.display = 'block';
                          xIcons["2"].style.display = 'block';
                          $('#motorHome').attr('disabled', false);
                          $('#bike').attr('disabled', true);
                          $('#smallCar').attr('disabled', true);
                          $('#largeCar').attr('disabled', true);
                      }
                  }
              datavehicle();
    };

      //start date
      $('#datepicker').datepicker({
          minDate: 0,
          beforeShow: function() {
              $(this).datepicker('option', 'maxDate', $('#datepickerB').val());
          }
      });

      //end Date
      $('#datepickerB').datepicker({
          onSelect: select,
          beforeShow: function() {
            var minDate = $('#datepicker').datepicker('getDate');
                $(this).datepicker('option', 'minDate', $('#datepicker').val());
                if ($('#datepicker').val() === '') $(this).datepicker('option', 'minDate', 0);
                var maxDate = new Date(minDate.valueOf());
                maxDate.setDate(maxDate.getDate() + 16);
                $('#datepickerB').datepicker('option', 'maxDate', maxDate);
          }

      });

  // when 'I'm ready to go btn is clicked
  //hide input pages and arrows and show result page
      $('.submitBtn').click(function(){
          $('.needs-validation').hide();
          $('.resultwrap').show();
          $('.resultDiv').show();
          $('.bottomFIx').hide();
          $('#header').remove();
      });

  //------------------------ input button

  // when plus is clicked, value increased
  $('[data-quantity="plus"]').click(function(e){
      e.preventDefault(); // stop preventing it working as
      if (inputNum.value < 6 ) {
          $('#inputField').val(currentValue += 1); //keep add number when + is clicked
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
  $('.car').removeClass('change');
    $('.car').click(function (){
        $('.car').removeClass('change');
        $(this).addClass('change');
       // get selected button's value
        var carImage = $(this).clone();
        // get data when calculate btn is selected
        function carSelectGetData(){
            if (carImage["0"].value == 'bike') {
                vehicleFuc(vehicles.motorbike);
            } else if (carImage["0"].value == 'smallcar') {
                vehicleFuc(vehicles.smallCard);
            } else if (carImage["0"].value == 'largecar') {
                vehicleFuc(vehicles.largeCar);
            } else if (carImage["0"].value == 'motorhome') {
                vehicleFuc(vehicles.motorHome);
            } else {
                vehicleFuc(obj);
            }
        }
         carSelectGetData();
    });


  // final result function
  // collect all the data that user has choosen / select  and add to a result div.
  // date.js
  function vehicleFuc(obj){
      var travelDistance = parseInt($('.mapbox-directions-route-summary')["0"].childNodes[1].outerText);
      var numbers = $('.totalDays')["0"].innerHTML;
      var day = parseInt(numbers.match(/\d+/g).map(Number)["0"]);
      var rentalCost = day * obj.price;
      var distanceCost = travelDistance * (obj.fuel / 100);
      var total = rentalCost + distanceCost;
      var totalTo = total.toFixed(2);
          $('.yourCar').text(obj.name);
          $('#myImage').attr('src', obj.image);
          $('.dayPrice').text('Rental Cost A Day: ' + '$ ' + obj.price);
          $('.km').text('Travel Distance: ' + travelDistance +' km');
          $('.fuelCost').text('Fuel Cost: ' + '$ ' + obj.fuel + ' / 100 km' );
          $('.totalCost').text('Total: '+ '$ '+ totalTo + ' NZD' );
          $('.reference').text('#' + randNum);
  }

  //generate random number for reference code
  var randNum = "";
  var maxLength = 8;
      while(randNum.toString().length < maxLength){
        var temp = Math.floor(Math.random() * 10);
            randNum += temp.toString();
      }

  // trip.js library
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


  // car selection depends on the input value
  // hide and show depends on the peoople value
  function peopleSelection() {
  // if the value == number , show x icons
        if ( getInputValue == 1 ) {
            $('.motorHomeDisable')["0"].style.display = 'block';
            $('#motorHome').attr('disabled',true);
        } else if ( getInputValue == 2 ){
            $('.bikeDisable')["0"].style.display = 'block';
            $('#bike').attr('disabled',true);
            $('#motorHome').attr('disabled',false);
        } else if ( getInputValue == 3 ) {
            $('.bikeDisable')["0"].style.display = 'block';
            $('.smallcarDisable')["0"].style.display = 'block';
            $('#smallCar').attr('disabled',true);
            $('#motorHome').attr('disabled',false);
        } else if (getInputValue == 4 ) {
            $('.bikeDisable')["0"].style.display = 'block';
            $('.smallcarDisable')["0"].style.display = 'block';
            $('#bike').attr('disabled',true);
            $('#smallCar').attr('disabled',true);
            $('#motorHome').attr('disabled',false);
        } else if ( getInputValue == 5 ) {
            $('#smallCar').attr('disabled',true);
            $('#largeCar').attr('disabled',false);
            $('#motorHome').attr('disabled',false);
        }else {
            $('.bikeDisable')["0"].style.display = 'block';
            $('.smallcarDisable')["0"].style.display = 'block';
            $('.largecarDisable')["0"].style.display = 'block  ';
            $('#bike').attr('disabled',true);
            $('#smallCar').attr('disabled',true);
            $('#largeCar').attr('disabled',true);
            $('#motorHome').attr('disabled',false);
        }
  } //function ENDS



//---------------------------- form validation and page steps

  var x = document.getElementsByClassName('page');
  var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the crurrent tab
    function showTab(n) {
    // This function will display the specified tab of the form...
        x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
        if (n === 0) {
            document.querySelector('.fa-angle-left').style.display = "none";
        } else {
            document.querySelector('.fa-angle-left').style.display = "block";
        }
        if (n == (x.length - 1)) {
            document.querySelector('.fa-angle-right').style.display = "none";

        } else {
            document.querySelector('.fa-angle-right').style.display = "block";
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
      var getInputValue = document.getElementById('inputField').value;
       // if getInputValue isn't 0 ,function happens
          if (getInputValue !== 0) {
              peopleSelection();
          }

    }

    function validateForm() {
    // This function deals with validation of the form fields
        var y, i, valid = true;
        var x = document.getElementsByClassName('page');
        y = x[currentTab].getElementsByClassName('datePick');
    // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
          // If a field is empty...
            if (y[i].value === "") {
            // add an "invalid" class to the field:
                y[i].className += " invalid";
            // and set the current valid status to false
                valid = false;
            }
        }
        if (direcValueA.value === "") {
            btnValidation ();
            valid = false;
        } else if (direcValueB.value === "") {
            btnValidation ();
            valid = false;
        }
        return valid; // return the valid status
    }

// when the input is empty this function fires
    function btnValidation () {
        var warningP = document.querySelector('.warning');
        $('.fa-angle-right').attr('disabled', true);
         warningP.style.display = 'block';
    }
