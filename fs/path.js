const fs = require('fs');
const path = require('path');

console.log(path.resolve(__dirname, 'message.txt'));

console.log(path.sep);

const filePath = 'C:\\Users\\73158\\gitbash\\node.js-learning-lab\\fs\\path.js'
console.log(path.parse(filePath));

console.log(path.dirname(filePath), path.basename(filePath), path.extname(filePath));
