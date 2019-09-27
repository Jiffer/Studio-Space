// This example uses an oscillator through an envelope
// it uses an array of notes to form a scale
// the note values represent MIDI note numbers
// the function midiToFrequency is used to convert to a frequency


// Global variables to set ADSR parameters:
var attackLevel = 1.0; // how loud when triggered on
var releaseLevel = 0;  // how loud when turned off

var attackTime = 0.001; // how quickly to go to max volume
var decayTime = 0.2;   // how quickly to decay to "sustain" volume
var susPercent = 0.2;  // how loud is the sustain volume
var releaseTime = 0.5; // how quickly to turn off

// p5 Audio objects created below
var env, triOsc;

// this is my scale - the only notes that will play
// middle C = 60
var notes = [48, 51, 53, 55, 58, 60, 63, 65, 67, 70, 72, 75];

// has user started audio?
var audioStarted = false;


// initialization
function setup() {
  createCanvas(200, 100);
}

function draw(){
  background(240);
  textAlign(CENTER);
  if (audioStarted == false){
    text('click to start audio', width/2, height/2)
  }
  else{
    text('click to play', width/2, height/2);
  }
}


function mousePressed()  {
  // if this is the first interaction, create the audio graph
  if (audioStarted == false)
  {
    createSoundGraph();
  }
  
  // set the frequency based on mouse height
  var frequency = 2*height-mouseY;

  // or uncomment the next 2 lines
  // var percentY = int(notes.length*(height - mouseY) / height);
  // var frequency = midiToFreq(notes[percentY]);
  console.log(frequency);

  triOsc.freq(frequency);
  env.play();
  
}

// To avoid issues with starting the audio without user interaction
function createSoundGraph(){
  env = new p5.Envelope();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(220);
  
  audioStarted = true;
}