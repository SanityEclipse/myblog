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

function updateEntry(id, title, content, date) {
  return knex('newEntries').where({
    id : id
  })
    .update({
    title: title,
    content: content,
    date: date
  })
}

module.exports = {

  getEntries,
  createEntry,
  updateEntry,
  deleteEntry

}
