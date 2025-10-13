let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    
    background(255);
    rectMode(CENTER)
    fill(141,207,242)
    rect(width/2,height/2,450,200)


    circle(x, y, 100);
    if (x < 50 || x > width - 50) {
        speedX *= -1;
    }
    if (y < 50 || y > height - 50) {
        speedY *= -1;
    }
    x += speedX;
    y += speedY;
}

function is0ut0fBounds(){
   if (is0ut0fBounds)(x,50,width-50)
        (is0ut0fBounds)(y,50,height-50)

}