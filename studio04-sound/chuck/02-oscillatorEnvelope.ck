// an ADSR envelope
// (also see envelope.ck)
TriOsc tri => ADSR e => dac;

// set a, d, s, and r
e.set( 100::ms, 8::ms, .5, 400::ms );
// set gain
.2 => tri.gain;

// infinite time-loop
while( true )
{
    // choose freq
    Math.random2( 30, 80 ) => Std.mtof => tri.freq;
    
    // key on - start attack
    e.keyOn();
    // advance time 
    50::ms => now;
    // key off - start release
    e.keyOff();
    // advance time
    1000::ms => now;
}