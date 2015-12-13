/**
 * app-start.js
 *
 * Author: Brayan Cruces
 * 
 * 
 *
 * JS de inicialización de Framework7
 *
 */

// Iniciamos el app
var myApp = new Framework7({
    animateNavBackIcon:true,
    swipePanel: 'left',

    // Habilitar Material Design
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;


// Add main view
var mainView = myApp.addView('.view-main', {
});



// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});



/* PANELES */ 



$$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });


$$('.panel-close').on('click', function (e) {
	myApp.closePanel();
});




// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});


// CARGAR SEGUN PÁGINA



   


// Estoy en 
myApp.onPageInit('page-evento', function (page) {
      console.log('Estoy en Detalle Evento');
      console.log(page);

       $.getScript( "js/page-evento.js", function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
    });
});


// Estoy en 
myApp.onPageInit('page-ruta', function (page) {
      console.log('Estoy en Ruta');
      console.log(page);
      
     
       

       $.getScript( "js/gmaps.js", function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
    });

       $.getScript( "js/page-ruta.js", function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
    });

     // cerrar notis
     myApp.closeNotification('.notification-item');

});



myApp.onPageInit('page_eventos_enmapa', function (page) {
  console.log('Estoy en Eventos en Mapa');
  console.log(page);

    
       

       $.getScript( "js/gmaps.js", function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
    });

       $.getScript( "js/page-mapa.js", function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
    });


    // cerrar notis
    myApp.closeNotification('.notification-item');

});


// Estoy en descubre

myApp.onPageInit('page_descubre', function (page) {
  console.log('Estoy en Descubre!');
  console.log(page);

    
  //Añadir notificación 
   myApp.addNotification({
        message: 'Por favor activa tu bluetooth para usar esta funcionalidad.',
        button: {
            text: 'OK',
            color: 'yellow'
        }
    });

   // Llamada a scripts
   
  app.startRangingBeacons();

   


});



// Reactivar busqueda



// $$('.popup1').on('closed', function () {

//   console.log('Popup1 is closed');
   
//   app.startRangingBeacons();

// });      

// $$('.popup2').on('closed', function () {

//   console.log('Popup2 is closed');
   
//   app.startRangingBeacons();

// });      



