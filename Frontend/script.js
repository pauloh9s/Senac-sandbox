import {listUsers} from './functions/listUser.js'
import { criarUser } from './functions/criarUser.js'
import { deletarUser } from './functions/deletarUser.js'

let name = document.getElementById('nameUser')
let deletarName = document.getElementById('inputDeletar')
document.getElementById('listar').addEventListener('click', listUsers())
document.getElementById('criar').addEventListener('click', () => {
    criarUser({name_user: name.value});
})
document.getElementById('deletar').addEventListener('click', () =>{
    deletarUser(parseInt(deletarName.value));
})
