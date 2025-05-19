import * as ProfessorModel from '../model/professorModels.js';

// GET /professores
export const getProfessores = async (req, res) => {
  try {
    const professores = await ProfessorModel.listarTodos();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar professores.' });
  }
};

// GET /professores/:id
export const getProfessorById = async (req, res) => {
  const { id } = req.params;

  try {
    const professor = await ProfessorModel.buscarPorId(id);

    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado.' });
    }

    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professor.' });
  }
};

// POST /professores
export const createProfessor = async (req, res) => {
  const { nome, email } = req.body;

  if (!nome) {
    return res.status(400).json({ error: 'O nome é obrigatório.' });
  }

  try {
    const novoProfessor = await ProfessorModel.criarProfessor({ nome, email });
    res.status(201).json(novoProfessor);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'E-mail já cadastrado.' });
    }
    res.status(500).json({ error: 'Erro ao criar professor.' });
  }
};

// PUT /professores/:id
export const updateProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const professor = await ProfessorModel.atualizarProfessor(id, { nome, email });
    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar professor.' });
  }
};

// DELETE /professores/:id
export const deleteProfessor = async (req, res) => {
  const { id } = req.params;

  try {
    await ProfessorModel.deletarProfessor(id);
    res.status(200).json({ message: 'Professor deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar professor.' });
  }
};
