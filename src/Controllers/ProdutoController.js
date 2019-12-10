const  Products = require('../models/Products');

module.exports = {
    async store(req, res){
        const { PDname, quantidade, codigo } = req.body;

        const produto = await Products.create({
            PDname,
            quantidade,
            codigo,
        })
        
        return res.json(produto);
    }
};