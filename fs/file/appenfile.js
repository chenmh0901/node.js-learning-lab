const fs = require('fs');
fs.appendFile('./message.txt', '\r\nNode.js', (err) => {
  if (err) {
    console.log('追加失败');
    return;
  }
  console.log('追加成功');
})
