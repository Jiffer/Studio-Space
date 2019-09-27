
///////////////////////////
// keyboard setup
///////////////////////////
Hid kb; // HID object
HidMsg msg; // message to convey data from HID

// which keyboard?
0 => int device;

// open keyboard (get device number from command line)
if( !kb.openKeyboard( device ) ) {
    me.exit();
}
<<< "keyboard '" + kb.name() + "' ready", "" >>>;

///////////////////////////
// \keyboard setup
///////////////////////////


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
        }
        
        else
        {
            //<<< "up:", msg.which, "(code)", msg.key, "(usb key)", msg.ascii, "(ascii)" >>>;
        }
    }
}

/* 



*/