import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const listarTodos = async () => {
  return await prisma.professores.findMany();
};

export const buscarPorId = async (id) => {
  return await prisma.professores.findUnique({
    where: { id: parseInt(id) }
  });
};

export const criarProfessor = async (dados) => {
  return await prisma.professores.create({
    data: dados
  });
};

export const atualizarProfessor = async (id, dados) => {
  return await prisma.professores.update({
    where: { id: parseInt(id) },
    data: dados
  });
};

export const deletarProfessor = async (id) => {
  return await prisma.professores.delete({
    where: { id: parseInt(id) }
  });
};
