const express = require('express');
const path = require('path');

const app = express();

// app set的作用是设置模板引擎和模板文件的路径
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.get('/home', (req, res) => {
  res.render('home', {
    title: '首页',
    content: '这是首页'
  });
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})
