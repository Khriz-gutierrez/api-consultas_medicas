import { Router } from 'express';
import {
  listarTodasCitas,
  listarCitaPorId,
  crearCita,
  actualizarCita,
  eliminarCita,
} from '../Controller/citasController.js';

const citasRouter = Router();
citasRouter.get('/', listarTodasCitas);
citasRouter.get('/:id', listarCitaPorId);
citasRouter.post('/', crearCita);
citasRouter.put('/:id', actualizarCita);
citasRouter.delete('/:id', eliminarCita);
export default citasRouter;
