// based on examples found here:
// https://creative-coding.decontextualize.com/arrays-and-objects/ 

// create a variable to hold coordinates
var xyPos = [[25, 100], [50, 200], [123, 123]];



// Initialization
function setup() {
  createCanvas(400, 400);


}

// Main loop
function draw() {
  background(50);

  for (var i = 0; i < xyPos.length; i = i + 1){
  	rect(xyPos[i][0], xyPos[i][1], 25, 25);
  }


  
}

