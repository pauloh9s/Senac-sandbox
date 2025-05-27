export async function listUsers() {
  try {
     const response = await fetch('http://localhost:3000/users') 
     const users = await response.json();
     console.log('Usuários: ', users)
  } catch (error) {
    console.error('Erro ao listar Usuários: ', error);
  }
}