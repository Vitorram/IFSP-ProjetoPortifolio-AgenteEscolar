export async function getPeriodosPorCursoController(req, res, next) {// READ - Períodos por Curso
    try {
      const { curso_id } = req.params;
      const result = await getPeriodosPorCurso(+curso_id);
      return res.json({
        message: 'Períodos vinculados ao curso encontrados com sucesso.',
        periodos: result
      });
    } catch (error) {
      next(error);
    }
  }