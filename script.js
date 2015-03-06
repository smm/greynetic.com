greyTones = ["#C2C2C2", "#B7B7B7", "#ACACAC", "#A0A0A0", "#959595", "#898989", "#7D7D7D"];

function drawCanvas() 
{  
	var canvas = document.getElementById("canvas");  
	canvas.width  = 40;
	canvas.height = 40;
  	setInterval(draw, 30);
}  

function draw() 
{
	for(i = 0; i <= greyTones.length; i++) 
	{
		var context = canvas.getContext("2d");
		topLeftCornerX = Math.floor(Math.random()*(canvas.width * .8));
		topLeftCornerY = Math.floor(Math.random()*(canvas.height * .8));
		rectWidth = Math.floor(Math.random()*(canvas.width - topLeftCornerX));
		rectHeight = Math.floor(Math.random()*(canvas.height - topLeftCornerY));
		context.fillStyle = greyTones[i]
		context.fillRect(topLeftCornerX, topLeftCornerY, rectWidth, rectHeight);
	}
}		

