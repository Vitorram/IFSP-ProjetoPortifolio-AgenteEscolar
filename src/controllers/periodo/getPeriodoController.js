import { getList } from "../../model/periodoModel"

export async function getListPeriodoController(req, res, next){
    try{
        const result = await getList()
        return res.json({
            message: 'Lista de periodos',
            periodos: result
        })
    } catch(error){
        next(error)
    }

}

