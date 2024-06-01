const express = require('express');
const app = express();

app.get('/response', (request, response) => {
  // response.redirect('http://niniix.cn');
  response.send('你好 express')
  // response.download(__dirname + '/package.json')
  // response.sendFile(__dirname + '/02-form.html')
  // response.json({name: 'express'})
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
