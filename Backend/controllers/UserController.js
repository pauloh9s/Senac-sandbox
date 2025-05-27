const User = require('../models/User')

module.exports = {
    async listUsers(req, res) {
        try {
            const users = await User.findAll(req.body);
            res.json(users);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao encontrar lista de usuários', error });
        }
    },

    async criarUser(req, res){
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({mensagem: 'Erro ao criar novo usuário', error});
        }
    },

    async deletarUser(req, res){
        try {
            const {id_user} = req.params;
            await User.destroy({ where: {
                id_user: id_user
            }})
        } catch (error) {
            res.status(500).json({mensagem: 'Erro ao deletar usuário', error});
        }
    }
}
