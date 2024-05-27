const fs = require('fs');
fs.readdir('./', (err, files) => {
  if (err) {
    console.log('读取失败');
    return;
  }
  console.log(files);
})
