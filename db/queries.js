var knex = require('./knex')

function getEntries() {
  return knex('newEntries');
}

function createEntry(entries) {
  return getEntries().insert(entries, 'id')
}


module.exports = {

  getEntries,
  createEntry

}
