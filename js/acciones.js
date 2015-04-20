// JavaScript Document1

							//CALENDARIO
$(document).on("pagecreate",function(){
	var preguntas1 = "";
	var preguntas2= "";
	var preguntas3= "";
	var preguntas4= "";
	//en español
		$("input.selectorfechaum", this ).mobipick({
				locale: "es"
				
			});
		
	//se dice quien va utilizar el selector de fehca
    var picker = $( "#calendario", this );
    picker.mobipick();
	
	//formato para el input de fecha
	var picker = $( "#calendario" ).mobipick({
    dateFormat: "dd-MM-yyyy"
});



					//CAMBIAR COLOR
$(document).ready(function(e) {
	
	//document.addEventListener("deviceready",function(){
		
 $('input:checkbox').change(function() {
	 $quien = $(this).attr('id');
	 //alert($quien);
	  if ($(this).is(':checked'))
     {
      $("label[for="+$quien+"]").css('color','#0F0');	 
     }
    else
     {
	  $("label[for="+$quien+"]").css('color','#F00');	 
	 }
 });
 
});


$('#resultadocro').on('click',function(){
	var suma=0;
	
	//cehcamos si esta 'checado' el elemento de id 'chc1' que es un checkbox
	if ($('#chc1').is(':checked'))
	 {
 		suma = suma + 1; 
	 }
	 
	 if ($('#chc2').is(':checked'))
	 {
		suma = suma + 0.5; 
	 }
	 
	
	 if ($('#capp1').is(':checked'))
	 {
		suma=suma+2;	 
	}
	if ($('#capp2').is(':checked'))
	{
		suma=suma+3;	
	}
	if ($('#capp3').is(':checked'))
	{
		suma=suma+3;	
	}
	if ($('#capp4').is(':checked'))
	{
		suma=suma+4;	
	}
	if ($('#capp5').is(':checked'))
	{
		suma=suma+4;	
	}
	
	if ($('#cago1').is(':checked'))
	{
		suma=suma+2;	
	}
	
	if ($('#cago2').is(':checked'))
	{
		suma=suma+3;	
	}
	if ($('#cago3').is(':checked'))
	{
		suma=suma+2;	
	}
	if ($('#cago4').is(':checked'))
	{
		suma=suma+3;	
	}
	if ($('#cago5').is(':checked'))
	{
		suma=suma+4;	
	}
	
	if ($('#cago6').is(':checked'))
	{
		suma=suma+3;	
	}
	
	if ($('#cago71').is(':checked'))
	{
		suma=suma+2;	
	}
	
	if ($('#cago8').is(':checked'))
	{
		suma=suma+3;	
	}
	
	if ($('#cago9').is(':checked'))
	{
		suma=suma+2;	
	}
	if ($('#cago10').is(':checked'))
	{
		suma=suma+2;	
	}
	if ($('#cago11').is(':checked'))
	{
		suma=suma+2;	
	}
	if ($('#cea1').is(':checked'))
	{
		suma=suma+4	
	}
	if ($('#cea2').is(':checked'))
	{
		suma=suma+2
	}
	if ($('#cea3').is(':checked'))
	{
		suma=suma+3;	
	}
	if ($('#cea4').is(':checked'))
	{
		suma=suma+0.5
	}
	if ($('#cea5').is(':checked'))
	{
		suma=suma+0.5;	
	}
	if ($('#cea6').is(':checked'))
	 {
		suma=suma+0.5;	 
	 }
	 if ($('#cea7').is(':checked'))
	 {
		suma=suma+6;	 
	}
	if ($('#cea8').is(':checked'))
	 {
		suma=suma+3;	 
	}
	if ($('#cea9').is(':checked')) 
	{
		suma=suma+3;	
	}
	if ($('#cea10').is(':checked'))
	{
		suma=suma+6;	
	}
	if ($('#cea11').is(':checked'))
	{
		suma=suma+3;	
	}
	if ($('#cea12').is(':checked'))
	{
		suma=suma+6;	
	}
	if ($('#ceca1').is(':checked'))
	{
		suma=suma+3;	
	}
	if ($('#ceca2').is(':checked'))
	{
		suma=suma+6;	
	}
	if ($('#ceca3').is(':checked'))
	{
		suma=suma+4;	
	}
	if ($('#ceca4').is(':checked'))
	{
		suma=suma+6;	
	}
	if ($('#ceca5').is(':checked'))
	{
		suma=suma+4;	
	}
	if ($('#ceca6').is(':checked'))
	{
		suma=suma+6;	
	}
	if ($('#ceca7').is(':checked'))
	{
		suma=suma+6;	
	}
	
	 	
		if(suma<=6)
		{
			$("#rangoregs").text("EMBARAZO DE BAJO RIESGO");
			$("#rangoregs").css("color","#000000")
			$("#rangoregs").css("background-color","#40FF00");
		}else{
			$("#rangoregs").text("EMBARAZO DE ALTO RIESGO");
			$("#rangoregs").css("color","#FFFFFF")
			$("#rangoregs").css("background-color","#B40404");
		}
		
	 $("#puntosregs").text(suma);
});

 $(".preguntas_uno").on('click', function (){
       preguntas1 = $(this).find('p').text();
	   $( "body" ).pagecontainer( "change", "#silvermantoraxint", { transition: "slide" });
	   
   });

 $(".preguntas_dos").on('click', function (){
		   preguntas2 = $(this).find('p').text();
		   $( "body" ).pagecontainer( "change", "#silvermanretrxif", { transition: "slide" });
	   
   });
  
  $(".preguntas_tres").on('click', function (){
       preguntas3 = $(this).find('p').text();
	   $( "body" ).pagecontainer( "change", "#silvermanaleteo1", { transition: "slide" });
	   
   });
   
    $(".preguntas_cuatro").on('click', function (){
       preguntas4 = $(this).find('p').text();
	   $( "body" ).pagecontainer( "change", "#silvermanaleteo1", { transition: "slide" });
	  // alert(preguntas4);
   });

picker.on( "change", function() {
    // formatted date, like yyyy-mm-dd              
    var date = $( this ).val();
 
    // JavaScript Date object
    var dateObject = $( this ).mobipick( "option", "date" );
});
});