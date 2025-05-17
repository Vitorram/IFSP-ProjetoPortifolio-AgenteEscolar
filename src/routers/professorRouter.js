import express from 'express'
import getProfessor from '../controllers/professor/getProfessor.js'
import criarProfessor from '../controllers/professor/criarProfessor.js'
import updateProfessor from '../controllers/professor/updateProfessor.js'
import deletarprofessor from '../controllers/professor/deletarprofessor.js'
import mudarProfessor from '../controllers/professor/mudarProfessor.js'

const router = express.Router()

router.get('/list', getProfessor)
router.get('/:id', ()=>{})
router.post('/', criarProfessor)
router.put('/:id', updateProfessor)
router.delete('/:id', deletarprofessor)
router.patch('/type', mudarProfessor)

export default router