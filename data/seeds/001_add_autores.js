exports.seed = function (knex){
  return knex("autores").del()
  .then(function() {
      return knex("autores").insert([
          {
              nome:"Leonardo", sobrenome: "Da Vinci", idade: 54, data_nasc: '09/12/1432', sexo: 'M', telefone: '4899872453'
          }
          

      ]);
  });
}

