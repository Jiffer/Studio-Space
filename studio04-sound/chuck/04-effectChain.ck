// playScale
// load up a scale and select notes from it

TriOsc tri => ADSR e => JCRev r => dac;

0.5 => float mix;
mix => r.mix;

// set gain
.2 => tri.gain;

// set a, d, s, and r
e.set( 5::ms, 8::ms, .5, 500::ms );

// create array variable
int scale[12];
// fill with note values
[48, 51, 53, 55, 58, 60, 63, 65, 67, 70, 72, 75] @=> scale;


///////////////////////////
// mouse setup
///////////////////////////
// hid objects
Hid hi;
HidMsg msg;

// which mouse
0 => int device;
// get from command line
if( me.args() ) me.arg(0) => Std.atoi => device;

// try to open the mouse device
if( !hi.openMouse( device ) ) {
    me.exit();
}
<<< "mouse '" + hi.name() + "' ready...", "" >>>;

///////////////////////////
// \mouse setup
///////////////////////////



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

        // wait on event
        hi => now;
        // loop over messages
        while( hi.recv( msg ) )
        {
            if( msg.isMouseMotion() )
            {
                msg.deltaX => float xVal;
                xVal / 1000.0 +=>  mix;
                if (mix > 1){
                    1 => mix;
                }
                else if( mix < 0){
                    0 => mix;
                }
                <<< "deltaX = ", msg.deltaX, " current playback ",  mix >>>;
                
                mix => r.mix;
                
            }
            
            else if( msg.isButtonDown() )
            {
                
            }
            
            else if( msg.isButtonUp() )
            {
                
            }
        }
    

    
    // choose scale index to play
    Math.random2(0,scale.size()-1)$int => int index;
    // use midi to freq to convert to frequency    
    scale[index] => Std.mtof => tri.freq;
    // key on - start attack
    e.keyOn();
    
    // advance time 
    50::ms => now;
    // key off - start release
    e.keyOff();
    // advance time
    120::ms => now;
    
    
    
    
}