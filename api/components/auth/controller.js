const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const TABLA = 'auth';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  async function login(username, password) {
    const data = await store.query(TABLA, { username: username });

    return bcrypt.compare(password, data.password).then((same) => {
      if (same === true) {
        //generar tokem
        delete data.password;
        return auth.sing(data);
      } else {
        throw new Error('Informacion ivalida');
      }
    });
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 10);
    }

    return store.upsert(TABLA, authData);
  }

  return {
    upsert,
    login,
  };
};
