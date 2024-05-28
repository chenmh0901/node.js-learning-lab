const http = require('http');

const server = http.createServer((request, response) => {
  response.statusCode = 203;
  response.statusMessage = 'OK';
  response.setHeader('test', ['a', 'b', 'c']);

  response.write('Hello http server');
  response.end();
})

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
})
