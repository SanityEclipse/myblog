var knex = require('./knex')

function getEntries() {
  return knex('newEntries');
}

function createEntry(entries) {
  return getEntries().insert(entries, 'id')
}

function deleteEntry(id) {
  return knex('newEntries').where('id', id).del()

}

module.exports = {

  getEntries,
  createEntry,
  deleteEntry

}
