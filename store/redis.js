const redis = require('redis');

const config = require('../config');

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
  legacyMode: true,
});

function list(table) {
  console.log(table);
  return new Promise((resolve, reject) => {
    client.get(table, (err, data) => {
      if (err) return reject(err);

      let res = data || null;
      if (data) {
        res = JSON.parse(data);
      }
      resolve(res);
    });
  });
}

function get(table, id) {}

async function upsert(table, data) {
  let key = table;

  if (data && data.id) {
    key = data + '_' + data.id;
  }
  await client.setEx(key, 10, JSON.stringify(data));
  return true;
}

module.exports = {
  list,
  get,
  upsert,
};
