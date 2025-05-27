const {Router} = require('express')
const router = Router();
const userController = require('../controllers/UserController')

router.get('/users', userController.listUsers)
router.post('/user/', userController.criarUser)
router.delete('/user/:id', userController.deletarUser)

module.exports = router;