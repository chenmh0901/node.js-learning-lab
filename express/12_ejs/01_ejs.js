const ejs = require('ejs');
const fs = require('fs');

const word = '你好'

const template = fs.readFileSync('./01_html.html').toString();

const result = ejs.render(template, { word });

console.log(result);
