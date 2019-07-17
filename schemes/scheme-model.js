const knex = require('knex');
const { development } = require('../knexfile');

const db = knex(development);

const find = () => db('schemes');

const findById = async id => {
  const scheme = await db('schemes')
    .where({ id })
    .first();

  if (scheme) return scheme;

  return null;
};

module.exports = {
  find,
  findById,
};
