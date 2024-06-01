const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function checkCodeMiddleware(request, response, next) {
  if (request.query.code === '521') {
    next();
  } else {
    response.send('无权访问');
  }
}

app.get('/home', checkCodeMiddleware, (request, response) => {
  response.send('首页');
})

app.get('/admin', checkCodeMiddleware, (request, response) => {
  response.send('管理员');
})

app.get('/setting', checkCodeMiddleware, (request, response) => {
  response.send('设置');
})

app.get('*', (request, response) => {
  response.send('404');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
