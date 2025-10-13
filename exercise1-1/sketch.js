function setup() {
  createCanvas(400, 300);
  noStroke();
    frameRate(1); // Draw once per second
}

let star2X = 100;
let star3X = 100;
let starY2 = 150;
let starY3 = 300;



function star(x, y) {
  fill(255, 234, 0);
  triangle(x, y - 50, x - 20, y, x + 20, y);
  triangle(x - 50, y - 20, x, y - 20, x, y + 10);
  triangle(x + 50, y - 20, x, y - 20, x, y + 10);
  triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
  triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}

function draw() {
  background(0, 0, 50);
star(100,200);
star(star2X,starY2);
star(star3X,starY3);
}

/**
 *
* /@param 
 */
