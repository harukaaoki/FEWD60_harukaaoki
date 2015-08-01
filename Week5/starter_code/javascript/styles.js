/*
5 - Effort/completion
5 - Code cleanliness
5 - Overall command of material
5 - Leveraging skills learned (using responsive design, HTML/CSS/JS, plugins, etc..)
20/20*/

 
$(document).ready(function() { 
 
 /* to prevent the submit button from refreshing the page

 EM: This step tells the browser to finish loading the HTML + CSS
 Before running the JS file. Otherwise, your functions will not have 
 access to the ids and classes in the HTML/CSS files. We often refer to this
 access as "Traversing the DOM". */

 $('#submit-btn').click(function(){
    event.preventDefault();

/*
 EM: event.preventDefault(); will prevent the default action from happening
 in this example, when you click on the button, the browser's default action is to try and submit the data to a database 
 or follow a URL link. Since our goal is not to submit the city's name, we want to 
 prevent the browser from trying to do this. 

 As a note, you need to declare event as an argument in your functions, as follows 
 $('#submit-btn').click(function(event){
    event.preventDefault();
 */
var city = $('#city-type').val();
// #city-type refers to the input box to the left of the submit button
$('#city-type').val('');
city = city.toLowerCase().trim();
// if the user inputs New York City / NYC / New York change the CSS class to 'nyc'


/* I don't understand why these things are needed: 
    $('#city-type').val(''); <-- what does this mean? Why is this empty? --> val('')
    city = city.toLowerCase().trim();
	
	EM: .val() tells the browser to look for a text value in the input field with the #city-type
	and assign it to the variable city. In this case, the () are empty, because we are getting the text. 

	in the second example, the browser will clear the inputted text.
	You can also enter text inside of the '' and the method will insert that 
	text into the input field. for example, .val('Test') will add the text 'test' to the input field 



     */




	if(city == 'nyc' || city == 'new york city' || city == 'new york') {
		$('body').attr('class','nyc');
		}
	// why not say, document.body.style.backgroundImage = "url('nyc.jpg')"; 
	// EM: You could also do that. But why write more code than you need to?  

	else if(city == 'sf' || city == 'san francisco' || city == 'san fran') {
		$('body').attr('class','sf');
		}
	else if(city == 'austin' || city == 'atx') {
		$('body').attr('class','austin');
		}
	else if(city == 'la' || city == 'los angeles' || city == 'lax') {
		$('body').attr('class','la');
		}
	else if (city == 'sydney') {
		$('body').attr('class','sydney');
	// why do we need three sets of closing brackets here? 
		}	
	else {}		 //closing bracket for your last else if statement (sydney)
	}); //closing bracket and parantheses for your .click function (ln 12)
});  //closing bracket and parantheses for your .ready function (ln 3)

// why don't i need to console.log or document.write anything? 
 //eg. if 'nyc' gets typed, console.log the image of nyc. 

// EM: the console is an interface that allows us to see what the computer
//is processing. When we use console.log(), we can ask the computer to show us 
//something specific, like a line of text or a mathematical function. The console will also
//show us errors, the content of arrays and key/value pairs inside of any object. 
//You can certainly add console.log to your code if you want the computer to tell you something, 
//such as the text that is taken from the input field. 

//with document.write, this assignment is not instructing us to add any HTML or text to the 
//interface, so it is not necessary to use this method.   