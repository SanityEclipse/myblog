
exports.up = function(knex, Promise) {
  return knex.schema.createTable('newEntries', function(table){
    table.increments();
    table.string('title', [100]);
    table.string('content', [1000]);
    table.string('date', [10]);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('newEntries');
};
