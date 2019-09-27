SndBuf buffer => dac;

"/path/to/your/file.wav" => buffer.read;
buffer.samples() => buffer.pos;

0 => buffer.pos;
buffer.length() => now;