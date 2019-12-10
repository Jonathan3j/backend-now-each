const Sequelize = require('sequelize');
const db = require('../config/Server_config');
//--------------------------------------------
const User = db.define('user', {
    username: {
           type: Sequelize.STRING(220),
       },
    email: {
           type: Sequelize.STRING(220),
       },
    senha: {
       type: Sequelize.STRING(),
    },
   
   }, {
       timestamps: true,
   }
   );
module.exports = User;