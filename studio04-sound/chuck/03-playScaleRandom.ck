// playScale
// load up a scale and select notes from it

TriOsc tri => ADSR e => dac;

// set gain
.2 => tri.gain;

// set a, d, s, and r
e.set( 5::ms, 8::ms, .5, 500::ms );

// create array variable
int scale[12];
// fill with note values
[48, 51, 53, 55, 58, 60, 63, 65, 67, 70, 72, 75] @=> scale;


// play through the scale
for(0 => int i; i < scale.size(); i++){
    scale[i] => Std.mtof => tri.freq;
    e.keyOn();
    // advance time 
    50::ms => now;
    // key off - start release
    e.keyOff();
    // advance time
    120::ms => now;
}

// pause for a second
1::second => now;

// main loop:
while( true )
{
    // uncomment if statement to introduce some randomness
    // it will only play on ~50% of the "beats"
 
    //if(Math.random2f(0, 100) > 50){
    
        // choose scale index to play
        Math.random2(0,scale.size()-1)$int => int index;
        // use midi to freq to convert to frequency    
        scale[index] => Std.mtof => tri.freq;
        // key on - start attack
        e.keyOn();
    //} // end of if statement
    
    // advance time 
    50::ms => now;
    // key off - start release
    e.keyOff();
    // advance time
    120::ms => now;
    
    
    
    
}