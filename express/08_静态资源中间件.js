const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/home', (request, response) => {
  response.end('Hello Express');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
