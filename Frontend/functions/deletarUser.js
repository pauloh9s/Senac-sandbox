export async function deletarUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}`,{
            method: 'DELETE',
        })
        const data = await response.json();
        console.log('Usuário deletado')
    } catch (error) {
        console.error(`'Erro ao deletar usuário ${error}`)
    }
    
}