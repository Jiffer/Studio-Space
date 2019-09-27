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

//////////////////////////////////////////////////////
// keyboard setup
//////////////////////////////////////////////////////
Hid kb; // HID object
HidMsg msg; // message to convey data from HID

// which keyboard?
1 => int device;

// open keyboard (get device number from command line)
if( !kb.openKeyboard( device ) ) {
    me.exit();
}
<<< "keyboard '" + kb.name() + "' ready", "" >>>;

//////////////////////////////////////////////////////
// \keyboard setup
//////////////////////////////////////////////////////


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
// infinite event loop
while( true )
{
    // wait on keyboard event
    kb => now;
    
    // get one or more messages
    while( kb.recv( msg ) )
    {
        // check for action type
        if( msg.isButtonDown() )
        {
            <<< "down:", msg.which, "(code)", msg.key, "(usb key)", msg.ascii, "(ascii)" >>>;
            msg.ascii - 65 => int index;
            <<< index >>>;
            if (index >= 0 && index < scale.size() - 1){
                scale[index] => Std.mtof => tri.freq;
                e.keyOn();
            }
            
        }
        
        else
        {
            //<<< "up:", msg.which, "(code)", msg.key, "(usb key)", msg.ascii, "(ascii)" >>>;
            e.keyOff();
        }
    }
}

/* 



*/