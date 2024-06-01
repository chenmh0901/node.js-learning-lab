const express = require('express');

const app = express();

app.use((req, res, next) => {
  const reffer = req.get('referer');

  if (reffer) {
    const url = new URL(reffer);
    const { hostname } = url
    // 127.0.0.1 与 localhost 类似于不同域名 虽然访问的内容是一样的
    if (hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404 NOT FOUND</h1>')
      return
    }
  }
  next();
})
// 静态资源
app.use(express.static(__dirname + '/public'));

app.get('/home', (request, response) => {
  response.send('这是首页');
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
