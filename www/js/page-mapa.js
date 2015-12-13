jQuery(function($) {



     var map = new GMaps({
      el: '#map',
      lat: -12.103027,
      lng: -77.051595,
      zoom:18
    });



     map.addMarker({
   lat: -12.103027,
   lng: -77.051595,
  title: 'El mago George',
  click: function(e) {
    alert('(14/12) Evento: El mago George');
  }
  
});

     map.addMarker({
  lat: -12.103000,
  lng: -77.051500,
  title: 'Lima',
  click: function(e) {
    alert('(14/12) Evento: Asi de Simple');
  }
});





})(jQuery);