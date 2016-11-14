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

function updateEntry(title, content, date, id) {
  return knex('newEntries').update({
    title: updatedTitle,
    content: updatedContent,
    date: updatedDate
  })
  .where('id', id)
}

module.exports = {

  getEntries,
  createEntry,
  updateEntry,
  deleteEntry

}
