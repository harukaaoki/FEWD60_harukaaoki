
$(document).ready(function() {
	$('#hamburger').click(function(){
		console.log('test');
		$('#hamburger').toggleClass('active');
		$('ul').toggleClass('expand');

	});
});

// pseudo code for hamburger expansion: 

// $(document).ready(function() {
// 	$(when the hamburger button).is clicked on(run this function{
// 	$(select the hidden menu).toggle this class on();
// })
// }); 


$("#menu_about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 4000);
});
// scrolling to ABOUT section 

// $(when about in menu).is clicked on(run this function(){
		//$()


$("#menu_more_info").click(function() {
    $('html, body').animate({
        scrollTop: $("#more_info").offset().top
    }, 4000);
});
// scrolling to MORE INFO section 

