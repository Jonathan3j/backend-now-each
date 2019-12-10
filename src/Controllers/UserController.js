const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { username, email, senha } = req.body;

        const user = await User.create({
            username,
            email,
            senha,
        })
        
        return res.json(user);
    }
};

// store, index, show, update e delete