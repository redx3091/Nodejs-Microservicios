module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjW',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'NJvMct1uEp',
    password: process.env.MYSQL_PASS || '3MzLaiuqqf',
    database: process.env.MYSQL_DB || 'NJvMct1uEp',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
};
