import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import professorRoutes from './routers/professorRouter.js';

//Coloquei aqui pq meu .env não estava indo,
//ele serve para carregar variáveis de ambiente definidas 
//em um arquivo .env 
dotenv.config();

<<<<<<< HEAD
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/professores', professorRoutes);
=======
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())


 

//--- Rotas Crud's ---
app.get('/', welcomeController)
app.use('/alunos', alunoRoutes)
app.use('/periodo', periodoRouter)
app.use('/curso', cursoRouter)

>>>>>>> 3eedaf01c87999e61767936f496d09620629bd43

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
