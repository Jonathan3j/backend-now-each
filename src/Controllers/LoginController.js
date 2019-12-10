const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { username, senha } = req.body;

       let user = await User.findOne({ 
           where: { 
                username, 
                senha 
            } 
        })

        if(!user){
            res.json({"senha": 'hfjkhdafkljpjue87878789127987huedjknhjkcn', "Nome": 'jsgdb716357tdgyute187ey1uigeqiyhbdlkm'});
        }else{
            res.json({"senha":user.senha, "Nome": user.username});
        }
    }

    

};