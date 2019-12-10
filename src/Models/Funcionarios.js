const Sequelize = require('sequelize');
const db = require('../config/Server_config');
//--------------------------------------------
const Funcionarios = db.define('funcionarios', {
    Nome: {
           type: Sequelize.STRING(220),
       },
    area_atuacao: {
           type: Sequelize.STRING(220),
       },
    cpf: {
       type: Sequelize.BIGINT,
       primaryKey:true,
    },
    numero: {
        type: Sequelize.STRING(),
     },
   
   }, {
       timestamps: true,
   }
   );

module.exports = Funcionarios;