import * as ProfessorModel from '../model/professorModels.js';

export const getProfessores = async (req, res) => {
  try {
    const professores = await ProfessorModel.listarTodos();
    res.status(200).json(professores);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar professores' });
  }
};

export const getProfessorById = async (req, res) => {
  const { id } = req.params;
  try {
    const professor = await ProfessorModel.buscarPorId(id);
    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }
    res.status(200).json(professor);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar professor' });
  }
};

export const createProfessor = async (req, res) => {
  const { nome, email } = req.body;
  try {
    if (!nome) {
      return res.status(400).json({ error: 'O nome é obrigatório' });
    }
    const novo = await ProfessorModel.criarProfessor({ nome, email });
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar professor', details: err.message });
  }
};

export const updateProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  try {
    const atualizado = await ProfessorModel.atualizarProfessor(id, { nome, email });
    res.status(200).json(atualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar professor' });
  }
};

export const deleteProfessor = async (req, res) => {
  const { id } = req.params;
  try {
    await ProfessorModel.deletarProfessor(id);
    res.status(200).json({ message: 'Professor deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar professor' });
  }
};
