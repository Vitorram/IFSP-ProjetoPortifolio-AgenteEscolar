import { getCursosPorPeriodo } from "../../../model/relacionamentos/cursoPeriodoModel.js"


export async function getCursosPorPeriodoController(req, res, next) {// READ - Cursos por Período
    try {
      const { periodo_id } = req.params;
      const result = await getCursosPorPeriodo(+periodo_id);
      return res.json({
        message: 'Cursos vinculados ao período encontrados com sucesso.',
        cursos: result
      });
    } catch (error) {
      next(error);
    }
  }