const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/login', (request, response) => {
  response.sendFile(__dirname + '/09_form.html')
})

app.post('/login', urlencodedParser, (request, response) => {
  console.log(request.body);
  response.send('上传表单数据');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
