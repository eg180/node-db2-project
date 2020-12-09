
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {

      tbl.increments();
      tbl.text('VIN', 128).unique().notNullable();
      tbl.text('make', 128).unique().notNullable();
      tbl.text('model', 128).unique().notNullable();
      tbl.text('mileage', 10).unique().notNullable();
      tbl.text('transmission', 128);
      tbl.text('title_status', 128);

    
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
