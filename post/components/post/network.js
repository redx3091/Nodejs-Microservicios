const express = require('express');

const response = require('../../../network/response');
const secure = require('../../../api/components/user/secure');

const controller = require('./index');

const router = express.Router();

//Router
router.get('/', list);
router.post('/', secure('loged'), upsert);
router.get('/:id', secure('loged'), get);
router.get('/:iduser', secure('loged'), getByUser);

//functions
function list(req, res, next) {
  controller
    .list()
    .then((data) => response.success(req, res, data, 200))
    .catch(next);
}

function upsert(req, res, next) {
  controller
    .upsert(req.body, req.user.id)
    .then((data) => response.success(req, res, data, 201))
    .catch(next);
}

function get(req, res, next) {
  controller
    .get(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch(next);
}

function getByUser(req, res, next) {
  controller
    .getByUser(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch(next);
}

module.exports = router;
