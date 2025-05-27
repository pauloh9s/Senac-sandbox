const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes')

async function startServer() {
try {
    await sequelize.authenticate();
    console.log('Conexão com o bando de dados bem sucedida');
} catch (error) {
    console.error ('Erro ao fazer conexão com o banco de dados:', error);
}
}
sequelize.sync();
startServer();

const app = express();
app.use(cors());
app.use(express.json())
app.use('/', userRoutes)

app.listen(3000, () =>{
    console.log('Servidor rondando na porta 3000');
});