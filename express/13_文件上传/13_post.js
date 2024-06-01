const express = require('express');
const path = require('path');
const formidable = require('formidable');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname));

app.get('/portrait', (request, response) => {
  response.render('portrait');
})

app.post('/portrait', (request, response, next) => {
  const form = new formidable.IncomingForm({ multiples: true, uploadDir: path.resolve(__dirname, './uploads'), keepExtensions: true });
  // const form = formidable({ multiples: true, uploadDir: path.resolve(__dirname, './uploads'), keepExtensions: true });
  form.parse(request, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(files);
    // console.log(fields);
    const url = '/uploads/' + files.portrait[0].newFilename;
    response.send(url);
  })
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
