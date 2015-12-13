/**
 * main.js
 *
 * Author: Brayan Cruces
 * 
 * Project: ApptivateSI
 *
 *
 *
 */



/***** VARIABLES GLOBALES *****/ 

var DATA_medida = 300; 


/***** FUNCIONES *****/ 

// Validaciones 

 function liveEvents()
   {      

          $('#intMin,#intMax').unbind('focus blur change keyup').bind("focus blur change keyup", function(){
                   if($('input').val().length > 0 )
                   {
                        $('#btnRandom').removeAttr("disabled");
                   } 
                   else
                   {
                        	
                        $('#btnRandom').attr('disabled', 'disabled');
                        Dissapear();


                   }
            });


          //Escuchar Tabs

          $$('#tab1').on('show', function () {
            

            $('#boton-plus').attr( 'href','agregar_gasto.html');

          });

          $$('#tab2').on('show', function () {

            
            $('#boton-plus').attr( 'href','agregar_ingreso.html');

          });      


           $$('#tab3').on('show', function () {

            
            $('#boton-plus').attr( 'href','agregar_meta.html');

          });     

         


           



   }

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength){
      object.value = object.value.slice(0, object.maxLength)

       myApp.closeNotification('.notification-item')
       // Notificacion
				myApp.addNotification({
					message: 'Max de 5 digitos',
					button: {
						text: 'Cerrar'
					}
				});
  }
       
      


  }

function isNumeric (evt) {
  	var theEvent = evt || window.event;
  	var key = theEvent.keyCode || theEvent.which;
  	key = String.fromCharCode (key);
  	var regex = /[0-9]|\./;
  	if ( !regex.test(key) ) {
  		theEvent.returnValue = false;
  		if(theEvent.preventDefault) theEvent.preventDefault();
  	}
}




// Manipulacion DOM con jQuery

$(document).ready(function(){
		
		
		liveEvents();

        //Click para el boton generar Random
		$("#btnRandom").click	
		( 
			function()
			{   

				

				var hasse = new Hasse2D(); 
				var min = parseInt($("#intMin").val());
				var max = parseInt($("#intMax").val());		
				var random = EnteroRandom(min, max);

				
				$("#block_divisores").show();
                $("#text_Random").hide();
				$("#text_Random").html("Los divisores de : <b>" + random+"</b>");
				$("#text_Random").fadeIn('slow');

				GenerarDivisores(random,hasse);
				$("#text_Divisores").fadeIn('slow');
				
				hasse.goHasse();

				//Notacion
				$("#idNotacion").html("");				
				$("#idNotacion").html(hasse.getNotacionConjuntos());
				
				//Antisimetricas
				$("#idAntisimetricas").html("");				
				for (var i = 0; i < hasse.antisimetricas.length; i++) 
				{
					$("#idAntisimetricas").html($("#idAntisimetricas").text() + hasse.antisimetricas[i].a.valor + "->" + hasse.antisimetricas[i].b.valor + ", "); 
				}
				
			    //Hasse
				DibujarHasse(hasse);
                
                // Mostrar Resultados             
                $('#ShowResultados').fadeIn('slow');

                // Notificaciones
                myApp.closeNotification('.notification-item')
				myApp.addNotification({
					message: 'Listo! Divisibilidad generada de ' + random,
					button: {
						text: 'Cerrar'
					}

				});

			}
		);
	}
);