import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { z } from "zod";

const periodoSchema = (includeId = false) => { // função para escolher qual validador zod usar, em caso de create ou update
  if (includeId) { // se estiver atualizando algo
    return z.object({
      id: z.number().positive(),
      ano: z.number().min(1900).max(2100)
    });
  } else {//se estiver apenas criando
    return z.object({
      ano: z.number().min(1900).max(2100)
    });
  }
};



export const periodoValidator = (periodo)=>{
    const includeId = 'id' in periodo
    const schema = periodoSchema(includeId)
    return schema.safeParse(periodo)
}


export async function create(periodo) {
    const result = await prisma.periodos.create({
        data: periodo
    })
    return result
}