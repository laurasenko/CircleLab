var canvas = document.getElementById("circle");
var ctx = canvas.getContext("2d");
var radius = document.getElementById("radius");


//DRAWING I COULDN'T PART WITH
ctx.beginPath();
ctx.arc(100, 400, 100, 0.2*Math.PI, 1.8*Math.PI, false);  //ctx.arc(x,y,radius,start angle, end angle, counter-clockwise)
ctx.lineTo(100, 400);  // A line from the centre of the arc to the start
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();    //fills shape
ctx.stroke();  //outline of shape
//big Pacman eye
ctx.beginPath();
ctx.arc(100, 350, 20, 0, 2 * Math.PI, false);
ctx.fillStyle = "black";
ctx.fill();



for (var i = 0; i < 9; i++) {
  ctx.fillRect(250 + i * 20, 100, 8, 8);  //draws filled rectangles
  }                                      //fillRect(x, y, width, height)

for (var j = 0; j < 9; j++) {
  ctx.fillRect(415, 240 + j * 20, 8, 8);  //draws filled rectangles
  }
for (var k = 0; k < 8; k++) {
  ctx.fillRect(150 + k * 20, 400, 8, 8);  //draws filled rectangles
  }
for (var l = 0; l < 7; l++) {
  ctx.fillRect(90, 170 + l * 20, 8, 8);  //draws filled rectangles
  }
for (var m = 0; m < 14; m++) {
  ctx.fillRect(290, 120 + m * 20, 8, 8);  //draws filled rectangles
  }
for (var n = 0; n < 6; n++) {
  ctx.fillRect(310 + n * 20 , 300 , 8, 8);  //draws filled rectangles
  }


ctx.strokeRect(340, 160, 30, 100);  //strokeRect - draws rect. outline
ctx.strokeRect(120, 160, 140, 30);
ctx.strokeRect(160, 200, 110, 110);
ctx.fillRect(410, 95, 20, 20);
ctx.fillRect(240, 390, 20, 20);
ctx.fillRect(410, 295, 20, 20);



ctx.beginPath();
ctx.arc(430, 200, 50, 0.8*Math.PI, 0.4*Math.PI, false);  //ctx.arc(x,y,radius,start angle, end angle, counter-clockwise)
ctx.lineTo(430, 200);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();    //fills shape
ctx.stroke();  //outline of shape
//Pacman eye
ctx.beginPath();
ctx.arc(450, 200, 10, 0, 2 * Math.PI, false);
ctx.fillStyle = "black";
ctx.fill();


ctx.beginPath();
ctx.arc(350, 400, 50, 0.8*Math.PI, 1.2*Math.PI, true);  //ctx.arc(x,y,radius,start angle, end angle, counter-clockwise)
ctx.lineTo(350, 400);  // A line from the centre of the arc to the start
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();    //fills shape
ctx.stroke();  //outline of shape
//Pacman eye
ctx.beginPath();
ctx.arc(350, 380, 10, 0, 2 * Math.PI, false);
ctx.fillStyle = "black";
ctx.fill();

//Big Pacman
ctx.beginPath();
ctx.arc(100, 400, 100, 0.2*Math.PI, 1.8*Math.PI, false);  //ctx.arc(x,y,radius,start angle, end angle, counter-clockwise)
ctx.lineTo(100, 400);  // A line from the centre of the arc to the start
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();    //fills shape
ctx.stroke();  //outline of shape
//big Pacman eye
ctx.beginPath();
ctx.arc(100, 350, 20, 0, 2 * Math.PI, false);
ctx.fillStyle = "black";
ctx.fill();
//Evil pacman 1
ctx.beginPath();
ctx.arc(200, 230, 20, 0.2*Math.PI, 1.8*Math.PI, false);  //ctx.arc(x,y,radius,start angle, end angle, counter-clockwise)
ctx.lineTo(200, 230);  // A line from the centre of the arc to the start
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();    //fills shape
ctx.stroke();  //outline of shape
//evil Pacman eye 1
ctx.beginPath();
ctx.arc(200, 220, 3, 0, 2 * Math.PI, false);
ctx.fillStyle = "white";
ctx.fill();

//Evil pacman 2
ctx.beginPath();
ctx.arc(200, 280, 20, 0.2*Math.PI, 1.8*Math.PI, false);  //ctx.arc(x,y,radius,start angle, end angle, counter-clockwise)
ctx.lineTo(200, 280);  // A line from the centre of the arc to the start
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();    //fills shape
ctx.stroke();  //outline of shape
//evil Pacman eye 2
ctx.beginPath();
ctx.arc(200, 270, 3, 0, 2 * Math.PI, false);
ctx.fillStyle = "white";
ctx.fill();





function pacmanArea() {
	var circleOutput = document.getElementById("circleOutput");
  var pacmanOutput = document.getElementById("pacmanOutput");
	var radiusInput = radius.value;
	var circleArea = Math.PI * Math.pow(radiusInput, 2);  //circleArea = pi*r^2
  var pacmanArea = 0.8*circleArea; //pacmanArea = four-fifths of circleArea based on arclength

	circleOutput.innerHTML = "The area of a circle with a radius of " + radiusInput + " is " + circleArea.toFixed(2) + ".";
  pacmanOutput.innerHTML = "The area of Pacman with a radius of " + radiusInput + " is " + pacmanArea.toFixed(2) + ".";

};

/*function drawCircle() {
	var radiusInput = radius.value;
	var canvas = document.getElementById("circle");
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(150, 75, radiusInput, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();
	ctx.stroke();
}*/

function pacman() {
  var radiusInput = radius.value;
  var canvas = document.getElementById("circle");
  var ctx = canvas.getContext("2d");
//clear canvas
//ctx.clearRect(0, 0, canvas.width, canvas.height);
//pacman
ctx.beginPath();
ctx.arc(100, 100, radiusInput, 0.2 * Math.PI, 1.8 * Math.PI, false);
ctx.lineTo(100, 100);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();
//pacman eye
ctx.beginPath();
ctx.arc(100, 75, 0.1*radiusInput, 0, 2 * Math.PI, false);
ctx.fillStyle = "black";
ctx.fill();
}

function runFunctions () {
  pacman();
  pacmanArea();
}

/*function clearCanvas() {
  var canvas = document.getElementById("circle");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}*/

pacmanButton.onclick = runFunctions;
//clearCanvas.onclick = clearCanvas;
