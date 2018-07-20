// // SETTING UP MAP ---------------------------------------------------------------

  mapboxgl.accessToken = 'pk.eyJ1IjoiamlhaGt3b24iLCJhIjoiY2ppOWR0b3Q2MHZoeTNwcGFwdjRqcGx2YyJ9.OCQ5S6NvpQir0tyfiUD3vQ';

  var map = new mapboxgl.Map({
      container : 'map',
      style : 'mapbox://styles/jiahkwon/cji9fzmxi2hdd2smlfizy96tl'
      // maxBounds: bounds
  });

  map.addControl(new MapboxDirections({
      accessToken : mapboxgl.accessToken,
      unit : 'metric'//miles to km
  }), 'top-right');
