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

const findSteps = id =>
  db('steps as s')
    .join('schemes as sc', 'sc.id', 's.scheme_id')
    .select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
    .where({ ['sc.id']: id })
    .orderBy('s.step_number', 'asc');

module.exports = {
  find,
  findById,
  findSteps,
};
