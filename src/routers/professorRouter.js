import express from 'express';
import {
  getProfessores,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor
} from '../controllers/professorController.js';

const router = express.Router();

// Listar todos os professores
router.get('/', getProfessores);

// Buscar professor por ID
router.get('/:id', getProfessorById);

// Criar novo professor
router.post('/', createProfessor);

// Atualizar professor existente
router.put('/:id', updateProfessor);

// Deletar professor
router.delete('/:id', deleteProfessor);

export default router;
