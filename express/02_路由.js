const express = require('express');
const app = express();

app.get('/home', (request, response) => {
  response.end('Hello Express');
})

app.get('/', (request, response) => {
  response.end('Home');
})

app.post('/login', (request, response) => {
  response.end('Login');
})

app.all('/all', (request, response) => {
  response.end('All');
})

app.all('*', (request, response) => {
  response.end('404 Not Found');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
