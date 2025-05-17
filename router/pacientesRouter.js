import { Router } from 'express';
import {
  listarTodosPacientes,
  listarPacientePorId,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
} from '../Controller/pacientesController.js';

const pacientesRouter = Router();

pacientesRouter.get('/', listarTodosPacientes);
pacientesRouter.get('/:id', listarPacientePorId);
pacientesRouter.post('/', crearPaciente);
pacientesRouter.put('/:id', actualizarPaciente);
pacientesRouter.delete('/:id', eliminarPaciente);

export default pacientesRouter;
