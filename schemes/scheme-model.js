const knex = require('knex');
const { development } = require('../knexfile');

const db = knex(development);

const find = () => db('schemes');

module.exports = {
  find,
};
