// JavaScript Document1

							//CALENDARIO
$(document).on("pagecreate",function(){
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

picker.on( "change", function() {
    // formatted date, like yyyy-mm-dd              
    var date = $( this ).val();
 
    // JavaScript Date object
    var dateObject = $( this ).mobipick( "option", "date" );
});