const db = {
  user: [{ id: '1', name: 'carlos' }],
};

async function list(tabla) {
  return db[tabla];
}

async function get(tabla, id) {
  let collection = await list(tabla);
  return collection.filter((item) => item.id === id)[0] || null;
}
async function upsert(tabla, data) {
  db[collection].push(data);
}
async function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
