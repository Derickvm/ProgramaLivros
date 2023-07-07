/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('editoras', (table)=> {
    table.increments();
    table.string("nome",80).notNullable();
    table.string("cidade",20).notNullable();
    table.string("estado",20).notNullable();
    table.string("telefone",12).notNullable();
    table.string("rua",40).notNullable();
    table.integer("cep",8).notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("editoras");
};
