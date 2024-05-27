const fs = require('fs');
fs.mkdir('./a/b/c', { recursive: true }, (err) => {
  if (err) {
    console.log('创建递归文件夹失败');
    return;
  }
  console.log('创建递归文件夹成功');
})

// fs.mkdir('./a', (err) => {
//   if (err) {
//     console.log('创建文件夹失败');
//     return;
//   }
//   console.log('创建文件夹成功');
// })
