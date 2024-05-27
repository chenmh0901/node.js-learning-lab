const fs = require('fs');
fs.rm('./a/b/c', { recursive: true }, (err) => {
  if (err) {
    console.log('删除递归文件夹失败');
    return;
  }
  console.log('删除递归文件夹成功');
})

// fs.rm('./a', (err) => {
//   if (err) {
//     console.log('删除文件夹失败');
//     return;
//   }
//   console.log('删除文件夹成功');
// })
