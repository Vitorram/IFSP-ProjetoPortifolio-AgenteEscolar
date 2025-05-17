export const errorHandler = (error, req, res, next) =>{
    console.error(error.type)

    if(error?.type === 'entity.parse.failed' && error.message.includes('JSON')){
        return res.status(500).json({
            message: "JSON INVALIDO, verifique a formatação dos dados"
        })
    } 

    return res.status(500).json({
        message: "erro inesperado, tente novamente mais tarde"
    })
}