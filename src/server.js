import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000


app.use(cors)
app.use(express.json())

//Rotas
 





app.listen(port, ()=>{
    console.log(`\n \n Servidor do crl \n\nrodando na porra da porta ${port}`)
})