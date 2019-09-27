// load the audio file into memory before loading the page
function preload() {
  soundFormats('wav'); 
  mySound = loadSound('assets/00-kick_acoustic.wav');
}


function setup() {
	createCanvas(400, 200);	

	// play sound when the page first loads
  	mySound.setVolume(0.5);
  	mySound.play();
}

function draw(){
	background(200);
}

function mousePressed(){
	// calculate and set pan value between -1, 1
	// based on where the mouse was pressed horizontally (x) 
	var leftRight = 2 * mouseX / width - 1;
	mySound.pan(leftRight);

	// calculate and set playback rate speed
	// based on where mouse pressed vertically (y)
	var playBackRate = 2 * mouseY / height;
	// TODO make it control the rate here...

	// set a level and play
	mySound.setVolume(0.5);
	mySound.play();
}