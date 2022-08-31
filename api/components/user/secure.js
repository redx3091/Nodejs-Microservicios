const auth = require('../../../auth');

module.exports = function checkAuth(action) {
  function middlwware(req, res, next) {
    switch (action) {
      case 'update':
        const owner = req.body.id;
        console.log(owner);
        auth.check.onw(req, owner);
        next();
        break;

      default:
        next();
    }
  }

  return middlwware;
};
