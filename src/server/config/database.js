module.exports = {
  development: {
    url: 'postgres://dali:365@dali-database:5432/readit',
  },
  test: {
    url: 'postgres://dali:365@dali-database:5432/readit_test',
  },
  production: {
    url: process.env.DATABASE_URL,
  },
};
