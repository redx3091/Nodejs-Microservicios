const db = {
  user: [{ id: 1, name: 'carlos' }],
};

function list(tabla) {
  return db[tabla];
}

function get(tabla, id) {
  let collection = list(tabla);
  return collection.filter((item) => item.id === id)[0] || null;
}
function upsert(tabla, data) {
  db[collection].push(data);
}
function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
