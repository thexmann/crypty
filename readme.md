# crypty
Latest version: 002.

Crypty will encrypt and decrypt a file using a user provided key.

There are three versions of Crypty: for Windows, Linux and MacOS.

## CCTCrypty Class
To use the CCTCrypty class, include the CCTCrypty.js in your NODEJS program or in your browser code.

Usage example:

  const crypty = require('./cctcrypty.js');
  
  const key = 'abcdefg12345678';
  
  const plaintext = "This is a test. This is only a test.";
  
  const cryptor = new CCTCrypty(key);
  
  var encrypted = cryptor.Encrypt(plaintext);
  
  console.log(encrypted);
  
  var plain = cryptor.Decrypt(encrypted);
  
  console.log(plain);

## Crypty Executable
To just use the executable:
crypty-win -h to see usage.

Usage:
  crypty-win inputfile -k=cryptokey [-e] [-d] [-o=outputfile]
  ./crypty-linux inputfile -k=cryptokey [-e] [-d] [-o=outputfile]
  crypty-macos inputfile -k=cryptokey [-e] [-d] [-o=outputfile]
  
  Crypty will attemt to decrypt the file if the crypty signature is found in the file, otherwise it will encrypt the file.
  
  - inputfile is the name of the file to be encrypted or decrypted (required)
  
  - -k=xxxxxxxx user provided crypto key used to encrypt or to attempt to decrypt (required)
  
  - -e to force encryption of the file (optional)
  
  - -d to force decryption - must contain a crypty signature (optional)
  
  - -o=yyyyyyyy to specify the output file name (optional)

## Contact
email cedarcreektech@cchristmann.com with comments

Author: Charles Christmann

## License
Copyright 2020, Charles Christmann

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
