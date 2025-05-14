import express from 'express'
import * as alunoController from '../controllers/alunoController.js'

const router = express.Router()

router.get('/', alunoController.getAll)
router.get('/:id', alunoController.getById)
router.post('/', alunoController.create)
router.put('/:id', alunoController.update)
router.delete('/:id', alunoController.remove)

export default router
