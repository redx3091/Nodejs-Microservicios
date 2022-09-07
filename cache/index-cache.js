const express = require('express');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(express.json());

app.use('/', router);

app.listen(config.cacheService.port, () => {
  console.log(
    `Servicion de cache escuchando en el puerto ${config.cacheService.port}`
  );
});
