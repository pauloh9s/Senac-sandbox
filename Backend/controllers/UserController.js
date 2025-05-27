
import User from '../models/User.js'

async function criar(res, req) {
    const user = await User.create(req.body);
    res.status(210).json(user);
}

async function listar(res, req) {
    const users = await User.findAll(req.body);
    res.json(users)
}

async function deletar(res, req) {
    const firstName = req.params;
    await User.destroy({
        where: {
            firstname_user: firstName
        }
    })
    res.json({ message: 'Usuário excluido' })
}

const UserController = {
    criar,
    listar,
    deletar
};

export default UserController
export { criar, listar, deletar }

