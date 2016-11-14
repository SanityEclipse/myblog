var knex = require('./knex')

function getEntries() {
  return knex('newEntries');
}

function createEntry(entries) {
  return getEntries().insert(entries, 'id')
}

// function deleteEntry() {
//   return getEntries().where('id', req.params.id).del();
// }

module.exports = {

  getEntries,
  createEntry

}
