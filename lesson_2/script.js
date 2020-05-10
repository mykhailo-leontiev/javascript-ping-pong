let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let dx = 2;
let dy = -2;
let x = canvas.width/2;
let y = canvas.height-30;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "rgba(255, 0, 0, 1";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    if(x<0 || x>canvas.width) {dx = -dx;}
    if(y<0 || y>canvas.height) {dy = -dy;} 
}

setInterval(draw, 10 );
