// JavaScript Document1
$(document).on("pagecreate",function(){
	
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

	
	$(".chc ,.capp").click(function() {
	
	//var iconochc = $(this).attr("data-icon");

var $Quien = $(this).attr('id');
var colorchc = $('#' + $Quien + ' a').css('color');
	//alert(colorchc);
	if (colorchc == 'rgb(255, 0, 0)')
	{
	//	$(this).buttonMarkup({ icon: "check" });
		$('#' + $Quien + ' a').css('color', '#0F0');
	}
	
	if (colorchc == 'rgb(0, 255, 0)')
	{
  	  //  $(this).buttonMarkup({ icon: "delete" });
		$('#' + $Quien + ' a').css('color', '#F00');
	}

    });
	
}); 
});
