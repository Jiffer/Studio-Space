/*
 this is a block comment 
*/

// this is an inline comment


// print to the console with <<< >>>
<<< "Hello World" >>>;

// create an oscillator object and connect it to the speakers:
SinOsc s => dac; // see also: TriOsc, SawOsc

// set the volume to .1 (range = 0:1)
.1 => s.gain;

// set the frequency to 300
300 => s.freq;

// Math.random2f(200, 400) => s.freq;
for(0 => int i; i < 100; i++){
    Math.random2f(200, 4000) => s.freq;
50::ms => now;
}