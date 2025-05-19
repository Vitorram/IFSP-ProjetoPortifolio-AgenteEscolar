import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import professorRoutes from './routers/professorRouter.js';

//Coloquei aqui pq meu .env não estava indo,
//ele serve para carregar variáveis de ambiente definidas 
//em um arquivo .env 
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/professores', professorRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
