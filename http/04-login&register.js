const http = require('http');

const server = http.createServer((request, response) => {
  const { method } = request;
  const { pathname } = new URL(request.url, `http://${request.headers.host}`);
  response.setHeader('Content-Type', 'text/html;charset=utf-8');
  if (method === 'GET' && pathname === '/login') {
    response.end('登录页面');
  } else if (method === 'GET' && pathname === '/register') {
    response.end('注册页面');
  } else {
    response.end('NOT FOUND');
  }
});

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
})
