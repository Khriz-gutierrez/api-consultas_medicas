import pool from '../config.js';

const listarTodosPacientesQuery = () =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM pacientes', (e, r) => (e ? rej(e) : res(r.rows)))
  );

const listarPacientePorIdQuery = id =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM pacientes WHERE id=$1', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

const crearPacienteQuery = ({
  nombre,
  apellido,
  fecha_nacimiento,
  sexo,
  correo,
  telefono,
  direccion,
}) =>
  new Promise((res, rej) =>
    pool.query(
      `INSERT INTO pacientes
       (nombre, apellido, fecha_nacimiento, sexo, correo, telefono, direccion)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [nombre, apellido, fecha_nacimiento, sexo, correo, telefono, direccion],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );

const actualizarPacienteQuery = (id, campos) => {
  const keys = Object.keys(campos);
  const values = Object.values(campos);
  if (!keys.length) return Promise.resolve(null);

  const setSql = keys.map((k, i) => `${k}=$${i + 1}`).join(', ');
  return new Promise((res, rej) =>
    pool.query(
      `UPDATE pacientes SET ${setSql} WHERE id=$${keys.length + 1} RETURNING *`,
      [...values, id],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );
};

const eliminarPacienteQuery = id =>
  new Promise((res, rej) =>
    pool.query('DELETE FROM pacientes WHERE id=$1 RETURNING *', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

export {
  listarTodosPacientesQuery,
  listarPacientePorIdQuery,
  crearPacienteQuery,
  actualizarPacienteQuery,
  eliminarPacienteQuery,
};
