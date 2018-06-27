var dateFormat = "mm/dd/yy",
  from = $( "#from" )
    .datepicker({
      changeMonth: true,
      numberOfMonths: 1
    })
    .on( "change", function() {
      to.datepicker( "option", "minDate", getDate( this ) );
    }),
  to = $( "#to" ).datepicker({
    changeMonth: true,
    numberOfMonths: 1,
    maxDate: "+15"
  })
  .on( "change", function() {
    from.datepicker( "option", "maxDate", getDate( this ) );
  });
