import {remove, periodoValidator} from '../../model/periodoModel.js'

export default async function deletePeriodoController(req, res, next){
    try{
        const {id} = req.params
        const user = {
            id: +id
        }
        const {success, error, data} = periodoValidator(user, {ano: true})
        if(!success){
            return res.status(400).json({
                message: 'Erro ao excluir periodo, verifique a requisição',
                errors: error.flatten().fieldErrors
            })
        }
        const result = await remove(data.id)
        return res.json({
            message: 'Periodo excluido com sucesso',
            periodo: result
        })
    } catch(error){
        if(error?.code === 'P2025' && error?.meta?.cause.includes('Record to delete does not exist')){
            return res.status(404).json({
                message: 'Periodo não encontrado!',
            })
        }
    }

}