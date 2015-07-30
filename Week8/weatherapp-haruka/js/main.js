$(document).ready(function (){

$("form").submit(function(){
	var cityName = $("input:text").val();
	console.log("The city is " +cityName);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;
	console.log("The URL is " + url);

$.ajax({
	type: 'GET',
	url: url,
	dataType: 'jsonp',
	success: function(data){
		console.log(data);

		$("#weather").text(JSON.stringify(json));
	},
	error: function(e){
		console.log(e.message);
	}

});
});
});
