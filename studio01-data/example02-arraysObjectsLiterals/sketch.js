// based on examples found here:
// https://creative-coding.decontextualize.com/arrays-and-objects/ 

// create a variable to hold rect objects
var rectObjs = []; // start with empty list
function setup() {
  createCanvas(400, 400);
}

// Main loop
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);

  // for all objects in array
  for (var i = 0; i < rectObjs.length; i++) {

    // call member variables using "dot" notation
    fill(rectObjs[i].fillColor);
    rect(rectObjs[i].xpos,
        rectObjs[i].ypos, 50, 25);
    rectObjs[i].ypos += 1;
  }
}


function mousePressed() {
  rectObjs.push({xpos: mouseX, ypos: mouseY,
    fillColor: random(255)});
}