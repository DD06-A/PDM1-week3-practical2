function setup(){
    createCanvas(600,600);
    background(255)
    fillcolour = color(random(255), random(255), random(255));
}

//let x=300
//let y=300

function draw(){
   
    
}
 

function drawTriangle(){

   fillcolour = color(random(255), random(255), random(255));
   fill(fillcolour)

    let x1= random(width);
    let y1= random(height);
    let x2= random(width);
    let y2= random(height);
    let x3= random(width);
    let y3= random(height);

    triangle(x1,y1,x2,y2,x3,y3)
}

function mousePressed(){
    drawTriangle();
}