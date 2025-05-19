import { createCursoPeriodo } from "../../../model/relacionamentos/cursoPeriodoModel";

export async function createCursoPeriodoController(req, res, next) {//CREATE
    try {
      const data = req.body;
      const validation = cursoPeriodoSchema.safeParse(data);
  
      if (!validation.success) {
        return res.status(400).json({
          message: 'Erro de validação ao vincular curso ao período.',
          errors: validation.error.flatten().fieldErrors
        });
      }
  
      const result = await createCursoPeriodo(validation.data);
      return res.json({
        message: 'Curso vinculado ao período com sucesso!',
        curso_periodo: result
      });
    } catch (error) {
      next(error);
    }
  }