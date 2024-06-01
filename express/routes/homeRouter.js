const express = require('express');

const router = express.Router();

//router.use

router.get('/home', (request, response) => {
  response.send('首页');
})

module.exports = router

