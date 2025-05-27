import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import sequelize from './database.js';
import router from './routes/userRoutes.js'

try {
    await sequelize.authenticate();
    console.log('Conexão com o bando de dados bem sucedida');
} catch (error) {
    console.error ('Erro ao fazer conexão com o banco de dados:', error);
}

sequelize.sync();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', router)

app.listen(3000, () =>{
    console.log('Servidor rondando na porta 3000');
});