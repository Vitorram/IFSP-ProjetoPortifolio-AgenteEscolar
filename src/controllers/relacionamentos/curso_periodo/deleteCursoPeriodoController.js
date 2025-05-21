import { removeCursoPeriodo } from "../../../model/relacionamentos/cursoPeriodoModel.js"

export default async function deleteCursoPeriodoController(req, res, next) {//DELETE
    try {
      const { curso_id, periodo_id } = req.params;
      const result = await removeCursoPeriodo(+curso_id, +periodo_id);
      return res.json({
        message: 'Vínculo entre curso e período removido com sucesso.',
        curso_periodo: result
      });
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({
          message: 'Vínculo não encontrado.'
        });
      }
      next(error);
    }
  }