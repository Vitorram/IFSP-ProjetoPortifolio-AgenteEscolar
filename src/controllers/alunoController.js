import * as AlunoModel from '../model/alunoModel.js'

export const getAll = async (req, res) => {
  try {
    const alunos = await AlunoModel.findAll()
    res.json(alunos)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos' })
  }
}

export const getById = async (req, res) => {
  try {
    const aluno = await AlunoModel.findById(req.params.id)
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' })
    res.json(aluno)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aluno' })
  }
}

export const create = async (req, res) => {
  try {
    const aluno = await AlunoModel.create(req.body)
    res.status(201).json(aluno)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aluno' })
  }
}

export const update = async (req, res) => {
  try {
    const aluno = await AlunoModel.update(req.params.id, req.body)
    res.json(aluno)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno' })
  }
}

export const remove = async (req, res) => {
  try {
    await AlunoModel.remove(req.params.id)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar aluno' })
  }
}
