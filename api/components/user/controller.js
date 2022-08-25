const { v4: uuidv4 } = require('uuid');

const TABLA = 'user';

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }
  function list() {
    return store.list(TABLA);
  }
  function get(id) {
    return store.get(TABLA, id);
  }
  function upsert(body) {
    const user = {
      name: body.name,
    };
    if (body.id) {
      user.id = body.id;
    } else {
      user.id = uuidv4();
    }
    return store.upsert(TABLA, user);
  }
  return {
    list,
    get,
    upsert,
  };
};
