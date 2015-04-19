// JavaScript Document1
$(document).on("pagecreate",function(){
	/*
	$(".cdro").tap(function() {
	
	//var iconochc = $(this).attr("data-icon");

	var $Quien = $(this).attr('id');
	var colorchc = $('#' + $Quien + ' a').css('color');
	
	switch(colorchc)
	{
		case ('rgb(255, 0, 0)'):
			$('#' + $Quien + ' a').css('color', '#0F0');
			break;
		case ('rgb(0, 255, 0)'):
			$('#' + $Quien + ' a').css('color', '#F00');
			break;
	}
	
	});
*/
	 //HISTORIA CLINICA
	
//------------------------------------------------------------------		
	
    var picker = $( "#calendario", this );
    picker.mobipick();
});


$(document).ready(function(e) {
	//CANCELA
document.addEventListener("deviceready",function(){
	
picker.on( "change", function() {
    // formatted date, like yyyy-mm-dd              
    var date = $( this ).val();
 
    // JavaScript Date object
    var dateObject = $( this ).mobipick( "option", "date" );
});

	
	
}); 
		
		
});



