var canvas = document.getElementById("circle");
var ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.arc(100,100,50,0,2*Math.PI, false);
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
