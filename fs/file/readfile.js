const fs = require('fs');
const rs = fs.createReadStream('./message.txt');

rs.on('data', (chunk) => {
  console.log(chunk.length);
  console.log(chunk.toString());
});

rs.on('end', () => {
  console.log('没有数据了');
})

// fs.readFile('./message.txt', (err, data) => {
// readfile 之后是buffer 需要toString()
//   console.log(data.toString());
// })
