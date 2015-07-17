// Put all your lovely jQuery / Javascript goodies right down here.
$("document").ready(function(){



$( ".anchorLink" ).click(function() {
	var target = $(this.href)

	$('html,body').slideDown(target,'slow',function(){

	});
  // $(this).slideDown( "slow", function() {
  // });
});


function() {
    	$( ".accordionButton" ).accordion({
    		collapsible: true
  		});

});