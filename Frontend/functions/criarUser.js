export async function criarUser(newUser) {
    try {
        const response = await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(`Erro ao criar usuário: ${error}`)
    }
    
}