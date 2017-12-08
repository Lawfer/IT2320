var circle = document.getElementById("Circle");
var square = document.getElementById("Square");
var rectangle = document.getElementById("Rectangle");
var triangle = document.getElementById("Triangle");
var rhombus = document.getElementById("Rhombus");

var ctx = circle.getContext("2d");
var stx = square.getContext("2d");
var rtx = rectangle.getContext("2d");
var ttx = triangle.getContext("2d");
var rhtx = rhombus.getContext("2d");

ctx.beginPath();
ctx.arc(circle.width/2 ,circle.height/2 ,50 ,0 , 2 * Math.PI, false);
ctx.stroke();

stx.strokeRect(100, 25, 100, 100);

rtx.strokeRect(50, 25, 200, 100);

ttx.beginPath();
ttx.moveTo(150, 25);
ttx.lineTo(225, 125);
ttx.lineTo(75, 125);
ttx.closePath();
ttx.stroke();

rhtx.beginPath();
rhtx.moveTo(50, 75);
rhtx.lineTo(150, 25);
rhtx.lineTo(250, 75);
rhtx.lineTo(150, 125);
rhtx.closePath();
rhtx.stroke();