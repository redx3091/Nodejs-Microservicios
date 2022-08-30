const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

function sing(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  return jwt.verify(token, secret);
}

const check = {
  onw: function (req, owner) {
    const decoded = decodeHeader(req);
    console.log(decoded);
    if (decoded.id !== owner) {
      throw error('No tienes permiso para hacer esta funcion', 401);
    }
  },
};

function getToken(auth) {
  if (!auth) {
    throw error('No viene Token', 401);
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw error('Formato invalido', 401);
  }

  let token = auth.replace('Bearer ', '');

  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  console.log(token);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

module.exports = {
  sing,
  check,
};
