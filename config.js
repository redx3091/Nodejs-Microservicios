module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
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
  cacheService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003,
  },
  redis: {
    host:
      process.env.REDIS_HOST ||
      'redis-18046.c92.us-east-1-3.ec2.cloud.redislabs.com',
    port: process.env.REDIS_PORT || 18046,
    password: process.env.REDIS_PASS || '9MPd9VkLzFKcolm1baAYVXiT1snStbC7',
  },
};
