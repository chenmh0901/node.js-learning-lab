const fs = require('fs');
const ws = fs.createWriteStream('./message.txt');
// ws=fs.createReadStream('./message.txt');

ws.write('Hello Node.js -1\r\n');
ws.write('Hello Node.js -2\r\n');
ws.write('Hello Node.js -3\r\n');
ws.write('Hello Node.js -4\r\n');
ws.write('Hello Node.js -5\r\n');

ws.close();
