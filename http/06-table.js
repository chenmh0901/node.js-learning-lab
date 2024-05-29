const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPE = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'text/javascript',
  'png': 'image/png',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'gif': 'image/gif',
  'ico': 'image/x-icon',
};
const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, `http://${request.headers.host}`);
  const filePath = __dirname + '/06-table' + pathname;
  const ext = path.extname(filePath).slice(1);
  console.log('filePath:', filePath);
  console.log('ext:', ext);
  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log(error)
      switch (error.code) {
        case 'ENOENT':
          response.statusCode = 404;
          response.end('<h1>404 Not Found</h1>');
          break;
      }
      return;
    }
    if (ext === 'html') {
      response.setHeader('Content-Type', MIME_TYPE[ext] + ';charset=utf-8');
      response.end(data);
    } else {
      response.setHeader('Content-Type', MIME_TYPE[ext]);
      response.end(data);
    }
  });
}
);

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
});
