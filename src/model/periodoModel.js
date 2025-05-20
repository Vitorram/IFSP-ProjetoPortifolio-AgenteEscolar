import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { z } from "zod";

const periodoSchema = z.object({
    id: z.number().positive(),
    ano: z.number().min(1900).max(2100)
})

export const periodoValidator = (periodo, partial = null) => {
    if(partial){
        return periodoSchema.partial(partial).safeParse(periodo)
    }
    return periodoSchema.safeParse(periodo)
}


export async function create(periodo) {     //create
    const result = await prisma.periodos.create({
        data: periodo
    })
    return result
}
export async function getList() {           //read
    const result = await prisma.periodos.findMany()
    return result
    
}
export async function update(id, periodo) { //update
    const result = await prisma.periodos.update({
        where:{
            id
        },
        data: periodo
    })
    
}
export async function remove(id) {          // delete
    const result = await prisma.periodos.delete({
        where:{
            id
        }
    })
    
}