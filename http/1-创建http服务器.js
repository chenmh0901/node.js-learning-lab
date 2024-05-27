const http = require('http');

const server = http.createServer((request, response) => {
  //设置响应体返回中文不乱码
  response.setHeader('Content-Type', 'text/html;charset=utf-8');
  response.end('Hello http server 你好http服务器');
})

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
})
