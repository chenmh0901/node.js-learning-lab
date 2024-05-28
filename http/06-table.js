const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, `http://${request.headers.host}`);
  const filePath = __dirname + '/06-table' + pathname;

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.statusCode = 500;
      response.end('读取失败')
      return;
    }
    response.end(data);
  });
}
);

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
});
