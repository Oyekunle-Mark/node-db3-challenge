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

const add = async scheme => {
  const [id] = await db('schemes').insert(scheme);

  return findById(id);
};

const update = (changes, id) =>
  db('schemes')
    .where({ id })
    .update(changes)
    .then(() => findById(id));

const remove = async id => {
  const item = findById(id);

  if (item) {
    await db('schemes')
      .where({ id })
      .del();

    return item;
  }

  return null;
};

const addStep = (step, id) => db('steps').insert({ ...step, scheme_id: id });

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};
