
exports.up = function(knex, Promise) {
  return knex.schema.createTable('newComments', function(table){
    table.increments();
    table.string('commentContent', [500]);
    table.string('date');
    table.integer('newEntries_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('newComments');
};
