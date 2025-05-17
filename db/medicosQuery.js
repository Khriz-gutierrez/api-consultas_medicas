import pool from '../config.js';

const listarTodosMedicosQuery = () =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM medicos', (e, r) => (e ? rej(e) : res(r.rows)))
  );

const listarMedicoPorIdQuery = id =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM medicos WHERE id=$1', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

const crearMedicoQuery = ({ nombre, apellido, especialidad, correo, telefono }) =>
  new Promise((res, rej) =>
    pool.query(
      `INSERT INTO medicos (nombre, apellido, especialidad, correo, telefono)
       VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [nombre, apellido, especialidad, correo, telefono],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );

const actualizarMedicoQuery = (id, campos) => {
  const keys = Object.keys(campos);
  if (!keys.length) return Promise.resolve(null);
  const setSql = keys.map((k, i) => `${k}=$${i + 1}`).join(', ');
  const values = Object.values(campos);
  return new Promise((res, rej) =>
    pool.query(
      `UPDATE medicos SET ${setSql} WHERE id=$${keys.length + 1} RETURNING *`,
      [...values, id],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );
};

const eliminarMedicoQuery = id =>
  new Promise((res, rej) =>
    pool.query('DELETE FROM medicos WHERE id=$1 RETURNING *', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

export {
  listarTodosMedicosQuery,
  listarMedicoPorIdQuery,
  crearMedicoQuery,
  actualizarMedicoQuery,
  eliminarMedicoQuery,
};
