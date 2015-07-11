 /* I don't understand why these things are needed: 

 $(document).ready(function() { 
 // to prevent the submit button from refreshing the page
 
 $('#submit-btn').click(function(){
    event.preventDefault();
    //get the value of the #city-type input and correct for capitalization */

var city = ('#city-type').val();

/* I don't understand why these things are needed: 
    $('#city-type').val(''); <-- what does this mean? Why is this empty? --> val('')
    city = city.toLowerCase().trim(); */ 


if(city == 'nyc' || city == 'new york city' || city == 'new york'){
	$('body').attr('class','nyc');
}
// why not say, document.body.style.backgroundImage = "url('nyc.jpg')"; 

else if(city == 'sf' || city == 'san francisco' || city == 'san fran'){
	$('body').attr('class','sf');

else if(city == 'austin'){
	$('body').attr('class','austin');

else if(city == 'la' || city == 'los angeles' || city == 'lax'){
	$('body').attr('class','la');

else if (city == 'sydney'){
	$('body').attr('class','sydney');
// why do we need three sets of closing brackets here? 
		}
	});
}); 

/* why don't i need to console.log or document.write anything? 
 eg. if 'nyc' gets typed, console.log the image of nyc. */