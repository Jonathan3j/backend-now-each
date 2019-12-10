const Products = require('../models/Products');

module.exports = {
    async store(req, res){
        const { codigo } = req.body;

       let products = await Products.findOne({ 
           where: { 
                codigo,
            } 
        })

            res.json({"ProducName": products.PDname, "Quantidade": products.quantidade, "Ccodigo": products.codigo});
        
    }

    

};