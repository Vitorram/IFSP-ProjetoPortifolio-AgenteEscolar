import { getList } from '../../model/professorModel.js'

export default async function getProfessorController(req, res) {
  try {
    const professores = await getList()
    return res.json(professores)
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar professores.' })
  }
}
