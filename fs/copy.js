const fs = require('fs');
const process = require('process');

// const data = fs.readFileSync('./1.mp4'); // 一次性读取全部需要的带宽大
// fs.writeFileSync('./2.mp4', data);
// console.log(process.memoryUsage());

const rs = fs.createReadStream('./1.mp4');
const ws = fs.createWriteStream('./3.mp4');

rs.on('data', (chunk) => {
  ws.write(chunk);
})

rs.on('end', () => {
  console.log(process.memoryUsage());
})

// rs.pipe(ws);
