const express = require('express');

const router = express.Router();

router.get('/admin', (request, response) => {
  response.send('管理员');
})

module.exports = router

