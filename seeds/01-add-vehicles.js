
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, VIN: '58694850645628157', make: "Nissan", model: "Xterra", mileage: "122333", transmission: "manual", title_status: "clean"}
      ]);
    });
};
