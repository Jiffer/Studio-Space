// based on examples found here:
// https://creative-coding.decontextualize.com/arrays-and-objects/ 

// create a variable to hold rect objects
let rectObjs = []; // start with empty list
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectObjs.length; i++) {
    
    rectObjs[i].show();
    if(rectObjs[i].move()){
      console.log("rectangle down!");
    }
  }
}

// mousePressed() callback function
function mousePressed() {
  // construct and push a new object onto the array
  rectObjs.push(new myRectObj(mouseX, mouseY, color(100, 23, 150)));
}


// function mouseDragged() {
//   // construct and push a new object onto the array
//   rectObjs.push(new myRectObj(mouseX, mouseY, random(255)));
// }

// a rectanble object 
// keeps track of location and color
class myRectObj{
  constructor(xIn, yIn, cIn){
    this.xPos = xIn;
    this.yPos = yIn;
    this.fillColor = cIn;
  }

  show(){
    fill(this.fillColor);
    rect(this.xPos, this.yPos, 50, 25);
  }
  
  move(){
    this.yPos++;
    if(this.yPos > height){
      return true;
    }
    else{
      return false;
    }
  }
}