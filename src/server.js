import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Rotas
import professorRoutes from './routers/professorRouter.js';
import alunoRoutes from './routers/alunoRouter.js';
import periodoRouter from './routers/periodoRouter.js';
import cursoRouter from './routers/cursoRouter.js';
import { welcomeController } from './controllers/welcomeController.js'; // Certifique-se de que esse controller exista

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.get('/', welcomeController);
app.use('/alunos', alunoRoutes);
app.use('/periodo', periodoRouter);
app.use('/curso', cursoRouter);
app.use('/professores', professorRoutes); // Adicionando a rota de professores

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
