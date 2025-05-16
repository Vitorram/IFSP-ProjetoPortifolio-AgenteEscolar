import { create, professorValidator } from "../../model/professorModel.js"

export default async function criarProfessor(req, res, next) {
  try {
    const professor = req.body

    const { success, error, data: professorValidado } = professorValidator(professor)

    if (!success) {
      return res.status(400).json({
        message: 'Erro ao cadastrar professor, verifique os dados!',
        errors: error.flatten().fieldErrors
      })
    }

    const resultado = await create(professorValidado)

    return res.status(201).json({
      message: "Professor criado com sucesso!",
      professor: resultado
    })
  } catch (error) {
    next(error)
  }
}
