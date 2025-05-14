import express from 'express'
import cors from 'cors'
import { welcomeController } from './controllers/welcomeController.js'

const app = express()
const port = 3000



app.use(cors())
app.use(express.json())

//Rotas

app.get('/professor', welcomeController)




app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
  })