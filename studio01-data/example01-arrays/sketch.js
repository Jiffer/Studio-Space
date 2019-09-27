// based on examples found here:
// https://creative-coding.decontextualize.com/arrays-and-objects/ 

// create a variable to hold coordinates
var rectXY = []; // start with empty list
// rectXY  = [[25, 50, 200], [50, 75, 150]]

// Initialization
function setup() {
  createCanvas(400, 400);

}

// Main loop
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  
  // loop through all the elements of the array starting at 0
  for (var i = 0; i < rectXY.length; i++) {
  	// element 2 contains the color value
    fill(rectXY[i][2]);
    // elements 0 and 1 contain the x and y coordinates
    rect(rectXY[i][0], rectXY[i][1], 50, 50);

    // uncomment to animate
    rectXY[i][1]++;
  }
}

// built in mousePressed callback function
function mousePressed() {
  // add an array to the array rectXY 
  console.log([mouseX, mouseY, random(255)]);
  rectXY.push([mouseX, mouseY, random(255)]);
}