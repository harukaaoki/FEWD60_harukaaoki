$(document).ready(function() {
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

	for (var i = 0; i < cities.length; i++) {
		$("select").append("<option>" + cities[i] + "</option>"); 
	}

	$("select").on('change', function(){
		
		var opt = $("select").val();


		if ( opt == 'NYC' ) {
			$('body').attr('class','nyc');
		} else if ( ){

		}
	});
			
// <select> is the tag that includes all the options 
// append() inserts specified content at the end of the selected elements
// <option> is what we're adding 

/*  <option value = "NYC">NYC</option> 
	<option value = "SF">SF</option> 
	<option value = "LA">LA</option> 
	<option value = "ATX">ATX</option> 
	<option value = "SYD">SYD</option> 
	*/ 

// when user changes SELECT, change background

// change class attrivute to city class (eg. nyc, atx, etc.) 


	}

});