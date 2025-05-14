import { PrismaClient } from "@prisma/client";
import { z } from 'zod';

const prisma = new PrismaClient();

const professorSchema = z.object({
  id: z.number().optional(),

  nome: z.string({
    required_error: 'O nome é obrigatório.',
    invalid_type_error: 'O nome deve ser um texto.'
  }).min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),

  email: z.string({
    required_error: 'O email é obrigatório.',
    invalid_type_error: 'O email deve ser um texto.'
  }).email({ message: 'Formato de e-mail inválido.' }).nullable().optional(),

  created_at: z.date().optional(),
  updated_at: z.date().optional()
});

export const professorValidator = (professor, partial = false) => {
  if (partial) {
    return professorSchema.partial().safeParse(professor);
  }
  return professorSchema.safeParse(professor);
};

export async function create(professor) {
  const result = await prisma.professores.create({
    data: professor
  });
  return result;
}

export async function remove(id) {
  const result = await prisma.professores.delete({
    where: { id }
  });
  return result;
}

export async function getList() {
  const result = await prisma.professores.findMany({
    include: { disciplinas: true }
  });
  return result;
}

export async function update(id, professor) {
  const result = await prisma.professores.update({
    where: { id },
    data: professor
  });
  return result;
}
