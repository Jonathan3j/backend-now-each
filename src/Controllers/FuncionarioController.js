const  Funcionarios = require('../models/Funcionarios');

module.exports = {
    async store(req, res){
        const { Nome, area_atuacao, cpf, numero } = req.body;

        const funcionario = await Funcionarios.create({
            Nome,
            area_atuacao, 
            cpf, 
            numero,
        })
        
        return res.json(funcionario);
    }
};