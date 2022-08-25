const jwt = require('jsonwebtoken');
function sing(data) {
  return jwt.sign(data, 'H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjW');
}

module.exports = {
  sing,
};
