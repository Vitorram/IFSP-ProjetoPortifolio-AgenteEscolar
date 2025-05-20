import express from 'express'
//import dos controllers usados na rota do Curso

import { getCursoController } from '../controllers/curso/getCursoController.js' 
import { getListCursoController } from '../controllers/curso/getCursoController.js' 
import createCursoController from '../controllers/curso/createCursoController.js' 
import updateCursoController from '../controllers/curso/updateCursoController.js'
import deleteCursoController from '../controllers/curso/deleteCursoController.js' 




const router = express.Router()

router.get('/list', getListCursoController)
router.get('/:id', getCursoController)
router.post('/', createCursoController)
router.put('/:id', updateCursoController)
router.delete('/:id', deleteCursoController)


//rota de alterações individuais
router.patch("/ano", )

export default router