import express from 'express'
import getProfessores from '../controllers/professor/getProfessor.js'
import getProfessorById from '../controllers/professor/getProfessorById.js'
import criarProfessor from '../controllers/professor/criarProfessor.js'
import updateProfessor from '../controllers/professor/updateProfessor.js'
import deletarProfessor from '../controllers/professor/deletarProfessor.js'
import mudarProfessor from '../controllers/professor/mudarProfessor.js'

const router = express.Router()

//Listar todos os professores
router.get('/list', getProfessores)

//Buscar professor por ID
router.get('/:id', getProfessorById)

//Criar novo professor
router.post('/', criarProfessor)


//Atualizar professor (PUT = substituição total)
router.put('/:id', updateProfessor)

//Deletar professor
router.delete('/:id', deletarProfessor)

//Alterar parcialmente (ex: email ou nome) — PATCH
// PATCH /professores/:id — atualização parcial
router.patch('/:id', mudarProfessor)


export default router
