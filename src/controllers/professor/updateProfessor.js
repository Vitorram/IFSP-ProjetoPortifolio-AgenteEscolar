import { update, professorValidator } from "../../model/professor.js"

export default async function updateProfessorController(req, res) {
  const { id } = req.params
  const professor = req.body

  // Validar o ID
  const idNum = Number(id)
  if (isNaN(idNum)) {
    return res.status(400).json({ message: "ID inválido." })
  }

  // Validar dados completos (PUT normalmente espera dados completos)
  const { success, error, data: professorValidado } = professorValidator(professor)

  if (!success) {
    return res.status(400).json({
      message: "Erro ao atualizar professor, verifique os dados!",
      errors: error.flatten().fieldErrors
    })
  }

  try {
    const resultado = await update(idNum, professorValidado)

    return res.json({
      message: "Professor atualizado com sucesso!",
      professor: resultado
    })
  } catch (err) {
    if (err.code === 'P2025') {
      return res.status(404).json({ message: "Professor não encontrado." })
    }
    return res.status(500).json({ message: "Erro ao atualizar professor.", details: err.message })
  }
}
