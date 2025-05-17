import { Router } from 'express';
import {
  listarTodosMedicos,
  listarMedicoPorId,
  crearMedico,
  actualizarMedico,
  eliminarMedico,
} from '../Controller/medicosController.js';

const medicosRouter = Router();
medicosRouter.get('/', listarTodosMedicos);
medicosRouter.get('/:id', listarMedicoPorId);
medicosRouter.post('/', crearMedico);
medicosRouter.put('/:id', actualizarMedico);
medicosRouter.delete('/:id', eliminarMedico);
export default medicosRouter;
