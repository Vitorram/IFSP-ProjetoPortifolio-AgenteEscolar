import express from 'express'
import cors from 'cors'
import { welcomeController } from './controllers/welcomeController.js'
import alunoRoutes from './routers/alunoRoutes.js'


const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

//Rotas
 


app.get('/professor', welcomeController)
app.use('/alunos', alunoRoutes)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
  })
