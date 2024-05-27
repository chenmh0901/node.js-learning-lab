const fs = require('fs');
fs.unlink('./message.txt', (err) => {
  if (err) {
    console.log('删除失败');
    return;
  }
  console.log('删除成功');
})

// fs.rmdir('./message.txt', (err) => {
//   if (err) {
//     console.log('删除失败');
//     return;
//   }
//   console.log('删除成功');
// })
