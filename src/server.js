import express from 'express'
import cors from 'cors'
import { welcomeController } from './controllers/welcomeController.js'
import alunoRoutes from './routers/alunoRoutes.js'
import periodoRouter from './routers/periodoRouter.js'
import cursoRouter from './routers/cursoRouter.js'


const app = express()
const port = 3000
app.use(cors())
app.use(express.json())


 

//--- Rotas Crud's ---
app.get('/', welcomeController)
app.use('/alunos', alunoRoutes)
app.use('/periodo', periodoRouter)
app.use('/curso', cursoRouter)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
  })
