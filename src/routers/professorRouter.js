import express from 'express';
import {
  getProfessores,
  getProfessorById,
  createProfessor,
  updateProfessor,
  deleteProfessor
} from '../controllers/professorController.js';

const router = express.Router();

router.get('/', getProfessores);
router.get('/:id', getProfessorById);
router.post('/', createProfessor);
router.put('/:id', updateProfessor);
router.delete('/:id', deleteProfessor);

export default router;
