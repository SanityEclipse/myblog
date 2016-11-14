var knex = require('./knex')

function getEntries() {
  return knex('newEntries');
}

function getSingleEntry(id){
  return knex('newEntries').where({id: id})
}

function createEntry(entries) {
  return getEntries().insert(entries, 'id')
}

function updateEntry(id, title, content, date) {
  console.log(arguments)
  return knex('newEntries').where({
    id : id
  })
    .update({
    title: title,
    content: content,
    date: date
  })
}

function deleteEntry(id) {
  return knex('newEntries').where('id', id).del()

}


module.exports = {

  getEntries,
  getSingleEntry,
  updateEntry,
  createEntry,
  getSingleEntry,
  deleteEntry

}
