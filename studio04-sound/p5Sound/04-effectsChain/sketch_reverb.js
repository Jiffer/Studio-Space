var mySound, reverb;
var audioStarted = false;

// load the audio file into memory before loading the page
function preload() {
  soundFormats('wav'); 
  mySound = loadSound('assets/00-kick_acoustic.wav');
}


function setup() {
	createCanvas(400, 200);	
  	
}

function draw(){
	background(200);
}

function mousePressed(){
	if (audioStarted == false){
		createSoundGraph();
	}
	// calculate and set wet/dry mix between 0, 1
	// based on where the mouse was pressed horizontally (x) 
	var wetPercentage = mouseX / width;
	reverb.drywet(wetPercentage);

	// calculate and set playback rate speed
	// based on where mouse pressed vertically (y)
	var playBackRate = 2 * mouseY / height;
	mySound.rate(playBackRate);

	// set a level and play
	mySound.setVolume(0.5);
	mySound.play();
}

// To avoid issues with starting the audio without user interaction
function createSoundGraph(){
 	// only listen to the reverb output
	// this will disconnect the sound file from the output
	mySound.disconnect();

	reverb = new p5.Reverb();
	reverb.process(mySound, 3, 2);
	
  
  	audioStarted = true;
}