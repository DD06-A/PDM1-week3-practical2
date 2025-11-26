function setup (){
    createCanvas(600,600)
}

function draw(){
    rectMode(CENTER)
    noStroke()
    background(0)
    
    // Top left circle (original)
    fill(230,9,160,95)  // hot pink
    circle(mouseX, mouseY, 60)
    
    // Top right circle
    fill(242,255,140,90)  // yellow
    circle(mirrorCoordinate(), mouseY, 60)
    
    // Bottom left circle
    fill(236,140,255,95)  // light pink
    circle(mouseX, mirrorCoordinate(), 60)
    
    // Bottom right circle
    fill(140,192,255,95)  // blue
    //we use both mirror functions for x and why because its not constrained to one axis value!!
    circle(mirrorCoordinate(), mirrorCoordinate(), 60)
}
//the centre is width/2 to get the distance away from it you
//subtract mouseX from it. say mouseX is 250, its DFC value would be  +50.
//take that away from previously defined centreX value (200) you get 150
function mirrorCoordinate(){
    let centreX = width/2;
    let distanceFromCentre = mouseX - centreX;
    return centreX - distanceFromCentre;
}