import express from 'express'
import cors from 'cors'
//import { welcomeController } from './controllers/welcomeController.js'
import alunoRoutes from './routers/alunoRoutes.js'
import professorRoutes from './routers/professorRouter.js';


const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

//Rotas
 


app.use('/professores', professorRoutes);
app.use('/alunos', alunoRoutes)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
  })
