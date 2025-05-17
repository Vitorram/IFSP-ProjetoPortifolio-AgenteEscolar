import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findAll = () => prisma.alunos.findMany()

export const findById = (id) => prisma.alunos.findUnique({
  where: { id: parseInt(id) }
})

export const create = (data) => prisma.alunos.create({ data })

export const update = (id, data) => prisma.alunos.update({
  where: { id: parseInt(id) },
  data
})

export const remove = (id) => prisma.alunos.delete({
  where: { id: parseInt(id) }
})
teste