
// variable to hold JSON object
var jsonThing;

// load it before the setup and loop can run
function preload(){
	// read in a local JSON file
	jsonThing = loadJSON("archetypes.json");
}

function setup() {
// create canvas to draw in
	createCanvas(400, 400);

	// var propertyNames = Object.keys(jsonThing);
	// for (var i=0; i<propertyNames.length; i++) {
	//     var subName = Object.keys(propertyNames[i]);
	//     var value = jsonThing.subName;
	//     createP(value); 
	// }


	// just draw these once
	for(var i = 0; i < jsonThing.artifacts.length; i++){
		console.log(jsonThing.artifacts[i].name);
		var randx = random(width);
		var randy = random(height);
		ellipse(randx, randy, 80, 40);
		textAlign(CENTER, CENTER);
		text(jsonThing.artifacts[i].name, randx, randy);
		// text(jsonThing.artifacts[i].synonyms[0], randx, randy);
	}		
}

function draw() {
  
}

function mousePressed(){
	
}