const express = require('express');
const homeRouter = require('./routes/homeRouter')
const adminRouter = require('./routes/adminRouter')

const app = express();

app.use(homeRouter);
app.use(adminRouter);

app.all('*', (request, response) => {
  response.send('404');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
