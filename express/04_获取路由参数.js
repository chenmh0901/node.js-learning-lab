const express = require('express');
const app = express();

app.get('/:id.html', (request, response) => {
  console.log(request.params.id)
  response.end('id: ' + request.params.id);
})


app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
