import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
const prisma = new PrismaClient()

const cursoPeriodoSchema = z.object({
    curso_id: z.number({
      required_error: 'O ID do curso é obrigatório.',
      invalid_type_error: 'O ID do curso deve ser um número.'
    }).positive({ message: 'O ID do curso deve ser um número positivo.' }),
  
    periodo_id: z.number({
      required_error: 'O ID do período é obrigatório.',
      invalid_type_error: 'O ID do período deve ser um número.'
    }).positive({ message: 'O ID do período deve ser um número positivo.' })
  })

  
  
export async function createCursoPeriodo(data) {// CREATE
    const result = await prisma.cursos_periodos.create({
        data
    })
    return result
}
export async function removeCursoPeriodo(curso_id, periodo_id) {//DELETE
    const result = await prisma.cursos_periodos.delete({
        where: {
            curso_id_periodo_id: {
                curso_id,
                periodo_id
            }
        }
    })
    return result
}
export async function getCursosPorPeriodo(periodo_id) {//READ - cursos de um periodo
    const result = await prisma.cursos_periodos.findMany({
        where: {
            periodo_id
        },
        include: {
            cursos: true
        }
    })
    return result
}
export async function getPeriodosPorCurso(curso_id) {//READ - traz os periodos de um curso
    const result = await prisma.cursos_periodos.findMany({
        where: {
            curso_id
        },
        include: {
            periodos: true 
        }
    })
    return result
}
  