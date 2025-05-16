import { remove } from "../../model/professorModel.js"

export default async function deletarProfessor(req, res, next) {
  try {
    const { id } = req.params

    const idNum = Number(id)
    if (isNaN(idNum)) {
      return res.status(400).json({
        message: 'ID inválido.'
      })
    }

    const result = await remove(idNum)

    return res.json({
      message: `Professor ID ${id} excluído com sucesso!`,
      professor: result
    })
  } catch (error) {
    if (
      error?.code === 'P2025' &&
      error?.meta?.cause?.includes('Record to delete does not exist')
    ) {
      return res.status(404).json({
        message: 'Professor não encontrado!'
      })
    }

    next(error)
  }
}
