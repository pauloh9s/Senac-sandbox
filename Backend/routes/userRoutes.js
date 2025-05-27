import express from 'express'
import UserController, { criar, listar, deletar } from '../controllers/UserController.js';

const router = express();

router.get('/user', listar)
router.post('/user', criar)
router.delete('/user/:firstName', deletar)

export default router;
