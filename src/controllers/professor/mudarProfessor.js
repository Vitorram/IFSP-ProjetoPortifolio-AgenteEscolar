import { PrismaClient } from '@prisma/client'
import { professorValidator } from '../../model/professor.js'

const prisma = new PrismaClient()

export default async function mudarProfessor(req, res) {
  const id = parseInt(req.params.id)
  const dados = req.body

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido.' })
  }

  // Validação parcial (PATCH)
  const validacao = professorValidator(dados, true)

  if (!validacao.success) {
    return res.status(400).json({ error: validacao.error.format() })
  }

  try {
    const professor = await prisma.professores.update({
      where: { id },
      data: validacao.data,
    })

    return res.json({
      message: `Professor ID ${id} atualizado com sucesso!`,
      professor,
    })
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Professor não encontrado.' })
    }
    return res.status(500).json({ error: 'Erro ao atualizar professor.', details: error.message })
  }
}
