greyTones = ["#EBEBEB", "#E1E1E1", "#D7D7D7", "#CCCCCC", "#C2C2C2",
 						 "#B7B7B7", "#ACACAC", "#A0A0A0", "#959595", "#898989",
 						 "#7D7D7D", "#707070", "#626262", "#555555"];

function drawCanvas() {  
	var canvas = document.getElementById("canvas");  
	canvas.width  = 30;
	canvas.height = 30;
	//draw();
  setInterval(draw, 30	);
	}  

function draw() {

	for(i = 4; i <= 10; i++) {
		
		var context = canvas.getContext("2d");
		context.strokeStyle = "#F00";
		//context.lineWidth = 9;
    context.stroke(0, 0, 50, 50);

		topLeftCornerX = Math.floor(Math.random()*(canvas.width * .8));
		topLeftCornerY = Math.floor(Math.random()*(canvas.height * .8));
		rectWidth = Math.floor(Math.random()*(canvas.width - topLeftCornerX));
		rectHeight = Math.floor(Math.random()*(canvas.height - topLeftCornerY));

    context.fillStyle = greyTones[i]
    context.fillRect(topLeftCornerX, topLeftCornerY, rectWidth, rectHeight);
		console.log("topLeftCornerX: ",topLeftCornerX, "rectWidth: ", rectWidth, "topLeftCornerY: ", topLeftCornerY, "rectHeight: ", rectHeight);

		}

	}				
