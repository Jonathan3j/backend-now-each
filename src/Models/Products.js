const Sequelize = require('sequelize');
const db = require('../config/Server_config');
//--------------------------------------------
const Products = db.define('products', {
    PDname: {
           type: Sequelize.STRING(220),
       },
    quantidade: {
           type: Sequelize.INTEGER,
       },
    codigo: {
       type: Sequelize.STRING(),
       primaryKey:true,
    },
   
   }, {
       timestamps: true,
   }
   );

module.exports = Products;