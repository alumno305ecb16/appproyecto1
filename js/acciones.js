// JavaScript Document1

							//CALENDARIO
$(document).on("pagecreate",function(){
	var preguntas1 = "";
	var preguntas2= "";
	var preguntas3= "";
	var preguntas4= "";
	var preguntas5= "";
	
	
	var cappreguntas1 = "";
	var cappreguntas2= "";
	var cappreguntas3= "";
	var cappreguntas4= "";
	var cappreguntas5= "";
	var cappreguntas6= "";
	var cappreguntas7= "";
	
	var frepreguntas1 = "";
	var frepreguntas2= "";
	var frepreguntas3= "";
	var frepreguntas4= "";
	var frepreguntas5= "";
	
	

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
//Posible parto limpiar
$('#fdpp').on('click',function(){

	$("#resfecha").text("");
});

//


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
		//Capurro
	$(".cappreguntas_uno").on('click', function (){
       cappreguntas1 = $(this).find('p').text();
	 
   });	
   
   $(".cappreguntas_2").on('click', function (){
       cappreguntas2 = $(this).find('p').text();
	 
   });	
   
    $(".cappreguntas_3").on('click', function (){
       cappreguntas3 = $(this).find('p').text();
   });	
   
    $(".cappreguntas_4").on('click', function (){
       cappreguntas4 = $(this).find('p').text();
   });	
   
    $(".cappreguntas_5").on('click', function (){
       cappreguntas5 = $(this).find('p').text();
	 
	   
	    if ((cappreguntas1 != "") && (cappreguntas2 != "") && (cappreguntas3 != "") && (cappreguntas4 != "") && (cappreguntas5 != ""))
		{
			
			var capsum1=parseInt(cappreguntas1)+parseInt(cappreguntas2)+parseInt(cappreguntas3)+parseInt(cappreguntas4)+parseInt(cappreguntas5);
			//alert(capsum1)
			var resultado=(capsum1+204)/7
			
			//alert(resultado);
				resultado=resultado.toString();
				var s=resultado.substring(0,2);
				var d=resultado.substring(3,4);
				//alert(s);
				if (d==7)
				{
					s=parseInt(s)+1;
					d=0;	
				}
				if(d==8)
				{
					s=parseInt(s)+1;
					d=1;	
				}
				
				if(resultado<=32)
				{
				$("#rangocap").css("color","white")
				$("#rangocap").css("background-color","red");	
				$("#rangocap").text("PREMATURO EXTREMO");
				}else if(resultado<=37)
				{
					$("#rangocap").css("color","black")
					$("#rangocap").css("background-color","yellow");	
					$("#rangocap").text("PREMATURO MODERADO");
				}else if(resultado<=40)
				{
					$("#rangocap").css("color","black")
					$("#rangocap").css("background-color","green");	
					$("#rangocap").text("TERMINO");
				}else{
					$("#rangocap").css("color","white")
					$("#rangocap").css("background-color","darkgreen");	
					$("#rangocap").text("POSTMADURO");
				}
				
				$("#resultadocap").text(s+" SEMANAS "+d+" DIAS");
				$("#tipocapurro").text("Capurro Somático");
			
			if(resultado>=35)
			{
				$('#btncap').hide();
				
			}else{
				$('#btncap').show();
			}
			
		}
	    
   });	
   
    $(".cappreguntas_6").on('click', function (){
       cappreguntas6 = $(this).find('p').text();
   });	
    $(".cappreguntas_7").on('click', function (){
       cappreguntas7 = $(this).find('p').text();
	   
	    if ((cappreguntas1 != "") && (cappreguntas2 != "") && (cappreguntas3 != "") && (cappreguntas4 != "") && (cappreguntas5 != "") && (cappreguntas6 != "") && (cappreguntas7 != ""))
	{
		var capsum1=parseInt(cappreguntas1)+parseInt(cappreguntas2)+parseInt(cappreguntas4)+parseInt(cappreguntas5)+parseInt(cappreguntas6)+parseInt(cappreguntas7);
		
		var resultado=(capsum1+200)/7
		
		resultado=resultado.toString();
		var s=resultado.substring(0,2);
		var d=resultado.substring(3,4);
		
		if (d==7)
		{
			s=parseInt(s)+1;
			d=0;	
		}
			if(d==8)
		{
			s=parseInt(s)+1;
			d=1;	
		}
						
				
		$("#tipocapurro").text("Capurro Neurológico");
				
		$("#resultadocap").text(s+" SEMANAS "+d+" DIAS");
		
		$('#btncap').hide();
		
	}
	   
	   
   });	
		
		//Silverman


 $(".preguntas_uno").on('click', function (){
       preguntas1 = $(this).find('p').text();
   });

 $(".preguntas_dos").on('click', function (){
	   
		   preguntas2 = $(this).find('p').text();
		//   $( "body" ).pagecontainer( "change", "#silverretcif", { transition: "pop" });
	   
   });
  
  $(".preguntas_tres").on('click', function (){
	   
       preguntas3 = $(this).find('p').text();
	  // $( "body" ).pagecontainer( "change", "#silveraleteo", { transition: "fade" });
	   
   });
   
    $(".preguntas_cuatro").on('click', function (){
	   
       preguntas4 = $(this).find('p').text();
	   //$( "body" ).pagecontainer( "change", "#silverquejidona", { transition: "slidedown" });
	  // alert(preguntas4);
   });

	  $(".preguntas_cinco").on('click', function (){
       preguntas5 = $(this).find('p').text();
	
		
		
		if ((preguntas1 != "") && (preguntas2 != "") && (preguntas3 != "") && (preguntas4 != "") && (preguntas5 != ""))
    {
		
   var  rsil=(parseInt(preguntas1)+parseInt(preguntas2)+parseInt(preguntas3)+parseInt(preguntas4)+parseInt(preguntas5));
	   $("#ressilver").text("PUNTOS "+rsil);
	 if(rsil==0)
	  {
		   $("#rangosilver").text("Sin Asfixia ni Dificultad Respiratoria");
		   $("#rangosilver").css("color","#000000")
		   $("#rangosilver").css("background-color","#40FF00");
	 }else if(rsil<=3)
	 {
		  $("#rangosilver").text("Con Dificultad Respiratoria Leve");
		  $("#rangosilver").css("color","#000000")
		  $("#rangosilver").css("background-color","yellow");
	}else if(rsil<=6)
	 {
		  $("#rangosilver").text("Con Dificultad Respiratoria Moderada");
		  $("#rangosilver").css("color","white")
		  $("#rangosilver").css("background-color","orange");
	}else if(rsil<=10)
	 {
		  $("#rangosilver").text("Con Dificultad Respiratoria Severa");
		  $("#rangosilver").css("background-color","red");
		  $("#rangosilver").css("color","white")
	}

	}
   });
   
		//APGAR
		
		
	  $(".frepreguntas_1").on('click', function (){
       frepreguntas1 = $(this).find('p').text();
   });
    $(".frepreguntas_2").on('click', function (){
       frepreguntas2 = $(this).find('p').text();
   });
    $(".frepreguntas_3").on('click', function (){
       frepreguntas3 = $(this).find('p').text();
   });
    $(".frepreguntas_4").on('click', function (){
       frepreguntas4 = $(this).find('p').text();
   });
    $(".frepreguntas_5").on('click', function (){
       frepreguntas5 = $(this).find('p').text();
	 
	  
	  if ((frepreguntas1 != "") && (frepreguntas2 != "") && (frepreguntas3 != "") && (frepreguntas4 != "") && (frepreguntas5 != ""))
	  {
		  
		   var reapgar=parseInt(frepreguntas1)+parseInt(frepreguntas2)+parseInt(frepreguntas3)+parseInt(frepreguntas4)+parseInt(frepreguntas5);
		  
		$("#apgarresultado").text(reapgar+" PUNTOS");
		
		if(reapgar<=3)
		{
			$("#rangoapgar").text("Asfixia Severa.");
			$("#rangoapgar").css("color","white")
			$("#rangoapgar").css("background-color","red");
		}else if(reapgar<=7){
				$("#rangoapgar").text("Pueden Ser Necesarias Algunas Maniobras Para Ayudarlo a Respirar");
				$("#rangoapgar").css("color","black")
			$("#rangoapgar").css("background-color","yellow");
		}else{
				$("#rangoapgar").css("color","white")
				$("#rangoapgar").css("background-color","green");
				$("#rangoapgar").text("Bebé en Buenas Condiciones");
		}
		
		
		}
	  
	  
	 
   });
   
   
  
   $('#btnriesgo').on('click', function(){
	   
	   $('#hc1').prop("checked",false);   
	   
	  $( "body" ).pagecontainer( "change", "#riesgoobstetrico", { transition: "slidedown" });
   });
   
   
   
   $('#calcularfechaparto').on('click',function(){
	 var fecha=document.getElementById("calendario").value;
			fecha=fecha.toString();
			var di=fecha.substring(0,2);
			var me=fecha.substring(3,5);
			var yyy=fecha.substring(6,10);
			
			var dd=parseInt(di);
			var mm=parseInt(me);
			var yyy=parseInt(yyy);
			
			var d=parseInt(dd);
			
			for(var i=1;i<=287;i++)
		{
			switch(mm)
			{
			case 01:
				var m=31;
				var mes="ENERO"
				break;
			case 02:
				var m=28;
				var mes="FEBRERO"
				break;
			case 03:
				var m=31;
				var mes="MARZO"
				break;
			case 04:
				var m=30;
				var mes="ABRIL"
				break;
			case 05:
				var m=31;
				var mes="MAYO"
				break;
			case 06:
				var m=30;
				var mes="JUNIO"
				break;
			case 07:
				var m=31;
				var mes="JULIO"
				break;
			case 08:
				var m=31;
				var mes="AGOSTO"
				break;
			case 09:
				var m=30;
				var mes="SPTIEMBRE"
				break;
			case 10:
				var m=31;
				var mes="OCTUBRE"
				break;
			case 11:
				var m=30;
				var mes="NOVIEMBRE"
				break;
			case 12:
				var m=31;
				var mes="DICIEMBRE"
				break;
			}
			var me;
			
			
			if(m==d)
			{
				mm=mm+1;
				d=0;
			}
			if(mm>12)
			{
				mm=1;
				yyy=yyy+1;	
			}
			
			d=d+1;
			
			if (i==280)
			{
					if (fecha=="")
					{
						alert("Seleccine una Fecha")	
					}else{
						document.getElementById("resfecha").innerHTML=d+"/"+mes+"/"+yyy;
					}
			}
			
			
		}
	   
   });
   
   
   
   
   $('#btnriesgo').on('click',function(){
	//  $("body").pagecontainer("change","#riesgoobstetrico",{transition:"slidedown"});
	  window.location=('#riesgoobstetrico');
	  $('.caja').each(function() {
        if($(this).is(':checkbox'))
		{
			$(this).removeAttr('checked');
			$("label[for="+ $(this).attr('id')+"]").css('color','#F00');
			$(this).checkboxradio('refresh');
			
		}
    }); 
   });
   
   
   
   
   

picker.on( "change", function() {
    // formatted date, like yyyy-mm-dd              
    var date = $( this ).val();
 
    // JavaScript Date object
    var dateObject = $( this ).mobipick( "option", "date" );
});
});