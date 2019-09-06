var jsonThing;
function preload(){
jsonThing = loadJSON("archetypes.json");

}

function setup() {
  createCanvas(400, 400);
  
  // createP(jsonThing);
  

	var propertyNames = Object.keys(jsonThing);
	for (var i=0; i<propertyNames.length; i++) {
	    var subName = Object.keys(propertyNames[i]);
	    var value = jsonThing.subName;
	    createP(value);
	    
	}

	for(var i = 0; i < jsonThing.artifacts.length; i++){
		console.log(jsonThing.artifacts[i].name);
		var randx = random(width);
		var randy = random(height);
		ellipse(randx, randy, 80, 40);
		textAlign(CENTER, CENTER);
		text(jsonThing.artifacts[i].name, randx, randy);
	}	
	
}

function draw() {
  
}

function mousePressed(){
	
}