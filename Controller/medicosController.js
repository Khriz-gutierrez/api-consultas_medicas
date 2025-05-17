import {
  listarTodosMedicosQuery,
  listarMedicoPorIdQuery,
  crearMedicoQuery,
  actualizarMedicoQuery,
  eliminarMedicoQuery,
} from '../db/medicosQuery.js';

const respond = (res, status, ok, msg, data = null) =>
  res.status(status).json({ success: ok, message: msg, ...(data && { data }) });

export const listarTodosMedicos = async (_, res) => {
  try { respond(res, 200, true, 'Médicos', await listarTodosMedicosQuery()); }
  catch (e) { console.error(e); respond(res, 500, false, 'Error interno'); }
};

export const listarMedicoPorId = async (req, res) => {
  try {
    const m = await listarMedicoPorIdQuery(req.params.id);
    if (!m) return respond(res, 404, false, 'Médico no encontrado');
    respond(res, 200, true, 'Médico', m);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error interno'); }
};

export const crearMedico = async (req, res) => {
  try { respond(res, 201, true, 'Médico creado', await crearMedicoQuery(req.body)); }
  catch (e) { console.error(e); respond(res, 500, false, 'Error al crear'); }
};

export const actualizarMedico = async (req, res) => {
  try {
    const m = await actualizarMedicoQuery(req.params.id, req.body);
    if (!m) return respond(res, 404, false, 'Médico no encontrado');
    respond(res, 200, true, 'Médico actualizado', m);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error al actualizar'); }
};

export const eliminarMedico = async (req, res) => {
  try {
    const m = await eliminarMedicoQuery(req.params.id);
    if (!m) return respond(res, 404, false, 'Médico no encontrado');
    respond(res, 200, true, 'Médico eliminado', m);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error al eliminar'); }
};
