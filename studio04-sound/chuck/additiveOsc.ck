// create an oscillator object and connect it to the speakers:
SinOsc s[1];  

// create array variable
int scale[12];
// fill with note values
[48, 51, 53, 55, 58, 60, 63, 65, 67, 70, 72, 75] @=> scale;

// variable to store fundamental frequency 
60 => Std.mtof => float fundamental;

// for loop to connect all the SinOsc objects 
// set gain and initial frequency
for(0 => int i; i < s.size(); i++){
    s[i] => dac; // see also: TriOsc, SawOsc
    // set the volume to .1 (range = 0:1)
    .2 / (i+1) => s[i].gain;
    fundamental * 1.*(i+1) => s[i].freq;
}

10::second => now;








// Infinite Loop:
while(true){
    // choose scale index to play
    Math.random2(0,scale.size()-1)$int => int index;
    scale[index] => Std.mtof => fundamental;
    
    // update all oscillators:
    for(0 => int i; i < s.size(); i++){
        fundamental * (i+1) => s[i].freq;
    }
    200::ms => now;
}