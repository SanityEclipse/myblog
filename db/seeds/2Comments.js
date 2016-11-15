
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('newComments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('newComments').insert({commentContent: 'should go to entry 1', date: '10/10/1000', newEntries_id: 1}),
        knex('newComments').insert({commentContent: 'should go to entry 2', date: '10/10/1000', newEntries_id: 2}),
        knex('newComments').insert({commentContent: 'should go to entry 3', date: '10/10/1000', newEntries_id: 3}),
        knex('newComments').insert({commentContent: '2nd Comment to entry1', date: '22/22/1000', newEntries_id: 1}),
        knex('newComments').insert({commentContent: '3rd Comment to entry1', date: '33/33/1000', newEntries_id: 1}),
      ]);
    });
};
