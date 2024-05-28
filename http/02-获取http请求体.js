const http = require('http');

const server = http.createServer((request, response) => {
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  });
  request.on('end', () => {
    console.log(body);
    response.end('ok');
  });
});

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
})
