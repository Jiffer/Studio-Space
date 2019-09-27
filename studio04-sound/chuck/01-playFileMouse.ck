// playbackMouse.ck
// play an audio file when mouse is clicked
// controls the playback rate with relative mouse position

// connect sndbuffer to dac
SndBuf buffer => dac;
// load file into buffer
"./assets/00-kick_acoustic.wav" => buffer.read;

// move playback position the end of the file so it doesn't play at start
buffer.samples() => buffer.pos;

// variable to track playback rate
0 => float rate;

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


// infinite time loop
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
            xVal / 100.0 +=> rate;
            <<< "deltaX = ", msg.deltaX, " current playback ",  rate >>>;
            // TODO: modify to control the playback rate 
            // using the appropriate sndbuf property
            
        }
        
        else if( msg.isButtonDown() )
        {
            // trigger audio playback of sndbuf
            if (rate > 0){
                
                // if rate is positive start playing from beginning of file
                0 => buffer.pos;
            }
            else if (rate < 0){
                // if rate is negative start from end of the file
                buffer.samples() - 1 => buffer.pos;
            }
        }
        
        else if( msg.isButtonUp() )
        {
            
        }
    }
}
