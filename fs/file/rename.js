const fs = require('fs');

// fs.rename('./message.txt', './new-message.txt', (err) => {
//   if (err) {
//     console.log('重命名失败');
//     return;
//   }
//   console.log('重命名成功');
// })

fs.rename('./message.txt', '../message.txt', (err) => {
  if (err) {
    console.log('移动失败');
    return;
  }
  console.log('移动成功');
})
