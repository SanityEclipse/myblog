var knex = require('./knex')

function getEntries() {
  return knex('newEntries');
}


module.exports = {

  getEntries

}
