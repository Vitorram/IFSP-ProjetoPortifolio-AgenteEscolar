import express from 'express'
//import dos controllers usados na rota do periodo

import { getPeriodoController } from '../controllers/periodo/getPeriodoController.js' 
import { getListPeriodoController } from '../controllers/periodo/getPeriodoController.js'
import createPeriodoController from '../controllers/periodo/createPeriodoController.js'
import updatePeriodoController from '../controllers/periodo/updatePeriodoController.js'
import deletePeriodoController from '../controllers/periodo/deletePeriodoController.js'




const router = express.Router()

router.get('/list', getListPeriodoController)
router.get('/:id', getPeriodoController)
router.post('/', createPeriodoController)
router.put('/:id', updatePeriodoController)
router.delete('/:id', deletePeriodoController)


//rota de alterações individuais
router.patch("/ano", )


export default router


