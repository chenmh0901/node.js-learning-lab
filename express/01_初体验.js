const express = require('express');
const app = express();

app.get('/home', (request, response) => {
  response.end('Hello Express');
})

app.get('/', (request, response) => {
  response.end('Home');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
