// Global variables to set ADSR parameters:
var attackLevel = 1.0; // how loud when triggered on
var releaseLevel = 0;  // how loud when turned off

var attackTime = 0.001; // how quickly to go to max volume
var decayTime = 0.2;   // how quickly to decay to "sustain" volume
var susPercent = 0.2;  // how loud is the sustain volume
var releaseTime = 0.5; // how quickly to turn off

var triOsc, env, filter;

// this is my scale - the only notes that will play
// middle C = 60
var notes = [48, 51, 53, 55, 58, 60, 63, 65, 67, 70, 72, 75];

// has user started audio?
var audioStarted = false;



// load the audio file into memory before loading the page
function preload() {
  
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
	// calculate and set pan value between 0, 3000 Hz
	// based on where the mouse was pressed horizontally (x) 
	var filterCutoff = 2000 * mouseX / width;
	filter.freq(filterCutoff);


  	env.play();
}

// To avoid issues with starting the audio without user interaction
function createSoundGraph(){
	
	// use an ADSR envelope
	env = new p5.Envelope();
  	env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  	env.setRange(attackLevel, releaseLevel);

  	// triangle waveform
  	triOsc = new p5.Oscillator('triangle');
  	triOsc.amp(env);
  	triOsc.start();
  	triOsc.freq(220);
	
	// only listen to the filtered output
	triOsc.disconnect();
  	filter = new p5.Filter();
  	triOsc.connect(filter);

  	audioStarted = true;
}