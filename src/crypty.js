"use strict";
const VER = '001';

const crypty = require('./cctcrpty.js');
const fs = require('fs');

var key = null, n, outfile = null, file = null, method = null;

for(n=2;n<process.argv.length;n++)
{
   if( process.argv[n].substr(0,2) == '-h' || process.argv[n].substr(0,2) == '-?' )
   {
      console.log('\nUsage: crypty inputfile -k=key [-e|-d] [-h] [-o=outfile]');
      console.log('   inputfile is the file to be encrypted/decrypted (required)');
      console.log('   -e to force encrypt\n   -d to force decrypt\n   -h for help');
      console.log('   -k= specifies the encryption key to be used (required)\n   -o= the output file');
      console.log('Example: crypty image.jpg -k=1234567890   will encrypt image.jpg to image.jpg.enc');
      console.log('Example: crypty test.txt.enc -k=1234567890 -o=file.txt   will encrypt test.txt.enc to file.txt');
      process.exit(0);
   }
   else if( process.argv[n].substr(0,2) == '-k')
   {
      key = process.argv[n].substr(3);
   }
   else if( process.argv[n].substr(0,2) == '-o')
   {
      outfile = process.argv[n].substr(3);
   }
   else if( !method && process.argv[n] == '-e' )
   {
      method = 'encrypt';
   }
   else if( !method && process.argv[n] == '-d' )
   {
      method = 'decrypt';
   }
  else
  {
      file = process.argv[n];
  }
}

if( !file )
{
   console.log("ERROR: no input file specified");
   process.exit(-1);
}

if( !key )
{
   console.log("ERROR: no encryption key specified");
   process.exit(-1);
}

if( !fs.existsSync(file) )
{
   console.log("ERROR: input file not found");
   process.exit(-1); 
}

console.log("Opening file "+file);

let text = fs.readFileSync(file,'binary').toString();

if( !method )
{
   if( text.substr(0,10) !== "CCT:CRYPTY")
      method = 'encrypt';
   else
      method = 'decrypt';
}

console.log("Method = "+method);

let cls = crypty(key);
if( method == 'encrypt' )
{
   let enc = "CCT:CRYPTY"+VER+cls.Encrypt(text);
   if( !outfile )
      outfile = file+'.enc';
   console.log("Saving: "+outfile);
   fs.writeFileSync(outfile,enc,'binary');
}
else if( method == 'decrypt' )
{
   if( text.substr(0,10) !== "CCT:CRYPTY")
   {
      console.log("Error: This file is not encrypted with Crypty");
      process.exit(-1);
   }
   let ver = text.substr(10,3);
   text = text.substr(13);
   let clear = cls.Decrypt(text,ver);
   let path = file.split('.');
   if( !outfile )
      outfile = path[0]+'.'+path[1];
   console.log("Saving: "+outfile);
   fs.writeFileSync(outfile,clear,'binary');
}
else
{
   console.log("Error: Invalid crypto method");
   process.exit(-1);
}