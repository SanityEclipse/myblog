
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('newEntries').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('newEntries').insert({title:'1st Entry', content:'Fun Content', date:'00/00/0000'}),
        knex('newEntries').insert({title:'2nd Entry', content:'Cool Content', date:'11/11/1111'}),
        knex('newEntries').insert({title:'3rd Entry', content:'Yummy Content', date:'22/22/2222'})
      ]);
    });
};
