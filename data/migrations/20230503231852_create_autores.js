/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('autores', (table)=> {
    table.increments();
    table.string("nome",80).notNullable();
    table.string("sobrenome",60).notNullable();
    table.integer("idade",3).notNullable();
    table.date("data_nasc",12).notNullable();
    table.string("sexo",8).notNullable();
    table.integer("telefone",20).notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("autores");
};
