const express = require('express');
const routes = express.Router();
const UserController = require('../Controllers/UserController');
const LoginController = require('../Controllers/LoginController');
const ProdutoController = require('../Controllers/ProdutoController');
const FuncionarioController = require('../Controllers/FuncionarioController');
const ListProductController = require('../Controllers/ListProductsController')

routes.post('/User', UserController.store);
routes.post('/Login', LoginController.store);
routes.post('/CadastrandoProduto', ProdutoController.store);
routes.post('/CadastrandoFunc', FuncionarioController.store)
routes.post('/ListProduct', ListProductController.store)

module.exports = routes;