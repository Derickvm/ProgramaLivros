exports.seed = function (knex){
  return knex("editoras").del()
  .then(function() {
      return knex("editoras").insert([
          {
              nome:"Leonardo", cidade: "Criciúma", estado:"SC", telefone: "48998425657", rua: "Rua José Giassi", cep:88812367
          }
          

      ]);
  });
}

