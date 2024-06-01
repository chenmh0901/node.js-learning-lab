const express = require('express');
const app = express();

app.get('/request', (request, response) => {
  console.log(request.ip)
  console.log(request.path)
  console.log(request.method)
  console.log(request.params)
  console.log(request.header)
  console.log(request.get('host'))
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
