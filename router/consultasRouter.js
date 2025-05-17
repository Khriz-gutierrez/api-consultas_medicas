import { Router } from 'express';
import {
  listarTodasConsultas,
  listarConsultaPorId,
  crearConsulta,
  actualizarConsulta,
  eliminarConsulta,
} from '../Controller/consultasController.js';

const consultasRouter = Router();
consultasRouter.get('/', listarTodasConsultas);
consultasRouter.get('/:id', listarConsultaPorId);
consultasRouter.post('/', crearConsulta);
consultasRouter.put('/:id', actualizarConsulta);
consultasRouter.delete('/:id', eliminarConsulta);
export default consultasRouter;
