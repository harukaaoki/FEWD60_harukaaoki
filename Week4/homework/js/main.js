/* These are my answers for #1 and #2. 

For link1, I tried changing the colour of the link text (instead of the background colour) to gray by writing 'color grey' but this isn't working - please help! 
*/

var link1 = document.getElementById('firstLink');

link1.addEventListener('mouseover', function(){
	link1.setAttribute('style', 'color: grey;');
});

link1.addEventListener('mouseout', function(){
	link1.setAttribute('style', 'color: white;');
});




var link2 = document.getElementById('secondLink');


link2.addEventListener("mouseover", function(){
	link2.setAttribute('style', 'color: grey;');
});

link2.addEventListener("mouseout", function(){
	link2.setAttribute('style', 'color: white;');
});



var link3 = document.getElementById('thirdLink');

link3.addEventListener("mouseover", function(){
	link3.setAttribute('style', 'color: grey;');
});

link3.addEventListener("mouseout", function(){
	link3.setAttribute('style', 'color: white;');
});


var link4 = document.getElementById('fourthLink');

link4.addEventListener("mouseover", function(){
	link4.setAttribute('style', 'background-color: grey;');
});

link4.addEventListener("mouseout", function(){
	link4.setAttribute('style', 'background-color: transparent;');
});


var link5 = document.getElementById('fifthLink');

link5.addEventListener("mouseover", function(){
	link5.setAttribute('style', 'background-color: grey;');
});

link5.addEventListener("mouseout", function(){
	link5.setAttribute('style', 'background-color: transparent;');
});
