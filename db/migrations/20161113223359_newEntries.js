
exports.up = function(knex, Promise) {
  return knex.schema.createTable('newEntries', function(table){
    table.increments();
    table.string('title');
    table.string('content');
    table.string('date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('newEntries');
};
