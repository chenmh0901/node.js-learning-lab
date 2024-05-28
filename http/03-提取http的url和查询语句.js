const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  // const res = url.parse(request.url, true);
  const res1 = new URL(request.url, `http://${request.headers.host}`);
  // console.log(res);
  console.log(res1);
  console.log(res1.searchParams.get('keyword'))
  response.end('url');
});

server.listen(9000, () => {
  console.log('server is running at http://localhost:9000');
})
