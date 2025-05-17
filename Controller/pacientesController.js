import {
  listarTodosPacientesQuery,
  listarPacientePorIdQuery,
  crearPacienteQuery,
  actualizarPacienteQuery,
  eliminarPacienteQuery,
} from '../db/pacientesQuery.js';

const respond = (res, status, success, message, data = null) =>
  res.status(status).json({ success, message, ...(data && { data }) });

export const listarTodosPacientes = async (_, res) => {
  try {
    const pacientes = await listarTodosPacientesQuery();
    respond(res, 200, true, 'Pacientes obtenidos', pacientes);
  } catch (e) {
    console.error(e);
    respond(res, 500, false, 'Error interno');
  }
};

export const listarPacientePorId = async (req, res) => {
  try {
    const p = await listarPacientePorIdQuery(req.params.id);
    if (!p) return respond(res, 404, false, 'Paciente no encontrado');
    respond(res, 200, true, 'Paciente encontrado', p);
  } catch (e) {
    console.error(e);
    respond(res, 500, false, 'Error interno');
  }
};

export const crearPaciente = async (req, res) => {
  try {
    const nuevo = await crearPacienteQuery(req.body);
    respond(res, 201, true, 'Paciente creado', nuevo);
  } catch (e) {
    console.error(e);
    respond(res, 500, false, 'Error al crear paciente');
  }
};

export const actualizarPaciente = async (req, res) => {
  try {
    const act = await actualizarPacienteQuery(req.params.id, req.body);
    if (!act) return respond(res, 404, false, 'Paciente no encontrado');
    respond(res, 200, true, 'Paciente actualizado', act);
  } catch (e) {
    console.error(e);
    respond(res, 500, false, 'Error al actualizar paciente');
  }
};

export const eliminarPaciente = async (req, res) => {
  try {
    const del = await eliminarPacienteQuery(req.params.id);
    if (!del) return respond(res, 404, false, 'Paciente no encontrado');
    respond(res, 200, true, 'Paciente eliminado', del);
  } catch (e) {
    console.error(e);
    respond(res, 500, false, 'Error al eliminar paciente');
  }
};
