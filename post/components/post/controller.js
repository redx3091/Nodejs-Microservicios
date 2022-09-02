const { v4: uuidv4 } = require('uuid');

const TABLA = 'post';

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mysql');
  }
  function list() {
    return store.list(TABLA);
  }

  function upsert(body, user) {
    const newPost = {
      text: body.text,
      user: user,
    };
    if (body.id) {
      newPost.id = body.id;
    } else {
      newPost.id = uuidv4();
    }

    return store.insert(TABLA, newPost);
  }

  function get(idpost) {
    return store.get(TABLA, idpost);
  }

  function getByUser(userId) {
    return store.query(TABLA, {
      user: userId,
    });
  }

  return {
    list,
    upsert,
    get,
    getByUser,
  };
};
