
$(document).ready(function() {
	$('#hamburger').click(function(){
		$('#hamburger').toggleClass('active');
		$('ul').toggleClass('expand');

	});

/* pseudo code for hamburger expansion: 

 $(document).ready(function() {
 	$(when the hamburger button).is clicked on(run this function{
 	$(select the hidden menu).toggle this class on();
})
 }); */

// scrolling to ABOUT section 

// $(when about in menu).is clicked on(run this function(){
		//$()


$("#menu_more_info").click(function() {
    $('html, body').animate({
        scrollTop: $("#more_info").offset().top
    }, 3000);
});
// scrolling to MORE INFO section 

$("#menu_start").click(function() {
    $('html, body').animate({
        scrollTop: $("#numberOne").offset().top
    }, 3000);

}); // EM: you were missing the closing braces for your function on line 30

}); // EM:It's best to wrap all of your Javascript in the document.ready function. 
