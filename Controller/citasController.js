import {
  listarTodasCitasQuery,
  listarCitaPorIdQuery,
  crearCitaQuery,
  actualizarCitaQuery,
  eliminarCitaQuery,
} from '../db/citasQuery.js';

const respond = (res, s, ok, m, d = null) =>
  res.status(s).json({ success: ok, message: m, ...(d && { data: d }) });

export const listarTodasCitas = async (_, res) => {
  try { respond(res, 200, true, 'Citas', await listarTodasCitasQuery()); }
  catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};

export const listarCitaPorId = async (req, res) => {
  try {
    const c = await listarCitaPorIdQuery(req.params.id);
    if (!c) return respond(res, 404, false, 'Cita no encontrada');
    respond(res, 200, true, 'Cita', c);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};

export const crearCita = async (req, res) => {
  try { respond(res, 201, true, 'Cita creada', await crearCitaQuery(req.body)); }
  catch (e) { console.error(e); respond(res, 500, false, 'Error al crear'); }
};

export const actualizarCita = async (req, res) => {
  try {
    const c = await actualizarCitaQuery(req.params.id, req.body);
    if (!c) return respond(res, 404, false, 'Cita no encontrada');
    respond(res, 200, true, 'Cita actualizada', c);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};

export const eliminarCita = async (req, res) => {
  try {
    const c = await eliminarCitaQuery(req.params.id);
    if (!c) return respond(res, 404, false, 'Cita no encontrada');
    respond(res, 200, true, 'Cita eliminada', c);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};

