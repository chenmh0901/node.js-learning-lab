const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function recordMiddleware(request, response, next) {
  const { url, ip } = request;
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);
  next();
}

app.use(recordMiddleware);

app.get('/home', (request, response) => {
  response.send('首页');
})

app.get('/admin', (request, response) => {
  response.send('管理员');
})

app.get('*', (request, response) => {
  response.send('404');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
