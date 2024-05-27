const fs = require('fs');

//相对路径参照的是命令行的工作目录，不是当前文件所在的目录 ..\dir\mkdir.js 会创建在file目录下 
//绝对路径参照的是当前文件所在的目录 __dirname :所在文件的所在目录的绝对路径 C:\Users\73158\gitbash\node.js-learning-lab\fs\file
fs.writeFile(__dirname + './message.txt', 'Hello Node.js', (err) => {
  if (err) {
    console.log('写入失败');
    return;
  }
  console.log('写入成功');
})

// fs.readFile('./message.txt', 'utf8', (err, data) => {
//  console.log(data.toString());
// })
