const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

//routes
router.post('/login', login);

function login(req, res) {
  controller
    .login(req.body.username, req.body.password)
    .then((token) => response.success(req, res, token, 200))
    .catch((e) => response.error(req, res, 'informacion valida', 400));
}

module.exports = router;
