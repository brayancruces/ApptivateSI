jQuery(function($) {



     var map2 = new GMaps({
      el: '#map-ruta',
      lat: -12.103027,
      lng: -77.051595,
      zoom:18
    });



     map2.addMarker({
   lat: -12.103027,
   lng: -77.051595,
  title: 'El mago George',
  click: function(e) {
    alert('(14/12) Evento: El mago George');
  }
  
});

   



})(jQuery);