var inputNum = document.querySelector('.input-group-field').value;
var currentVal = parseInt(inputNum);

$('[data-quantity="plus"]').click(function(e){
  e.preventDefault();

  if (inputNum.value !== NaN) {
    currentVal +=   1
    console.log(currentVal);


  }

});
