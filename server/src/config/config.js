module.exports = {
  port: 8090,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_NAME || 'myapp',
  },
};
