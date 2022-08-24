const express = require('express');
const response = require('../../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  response.success(req, res, 'todo correto', 200);
});

module.exports = router;
