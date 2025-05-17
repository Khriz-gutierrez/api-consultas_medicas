import {
  listarTodasConsultasQuery,
  listarConsultaPorIdQuery,
  crearConsultaQuery,
  actualizarConsultaQuery,
  eliminarConsultaQuery,
} from '../db/consultasQuery.js';

const respond = (res, s, ok, m, d = null) =>
  res.status(s).json({ success: ok, message: m, ...(d && { data: d }) });

export const listarTodasConsultas = async (_, res) => {
  try { respond(res, 200, true, 'Consultas', await listarTodasConsultasQuery()); }
  catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};

export const listarConsultaPorId = async (req, res) => {
  try {
    const c = await listarConsultaPorIdQuery(req.params.id);
    if (!c) return respond(res, 404, false, 'Consulta no encontrada');
    respond(res, 200, true, 'Consulta', c);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};

export const crearConsulta = async (req, res) => {
  try { respond(res, 201, true, 'Consulta creada', await crearConsultaQuery(req.body)); }
  catch (e) { console.error(e); respond(res, 500, false, 'Error al crear'); }
};

export const actualizarConsulta = async (req, res) => {
  try {
    const c = await actualizarConsultaQuery(req.params.id, req.body);
    if (!c) return respond(res, 404, false, 'Consulta no encontrada');
    respond(res, 200, true, 'Consulta actualizada', c);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};

export const eliminarConsulta = async (req, res) => {
  try {
    const c = await eliminarConsultaQuery(req.params.id);
    if (!c) return respond(res, 404, false, 'Consulta no encontrada');
    respond(res, 200, true, 'Consulta eliminada', c);
  } catch (e) { console.error(e); respond(res, 500, false, 'Error'); }
};
