module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjW',
  },
};
