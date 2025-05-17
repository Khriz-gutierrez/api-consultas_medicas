import pool from '../config.js';

const listarTodasConsultasQuery = () =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM consultas', (e, r) => (e ? rej(e) : res(r.rows)))
  );

const listarConsultaPorIdQuery = id =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM consultas WHERE id=$1', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

const crearConsultaQuery = ({ cita_id, sintomas, diagnostico, tratamiento, notas }) =>
  new Promise((res, rej) =>
    pool.query(
      `INSERT INTO consultas (cita_id, sintomas, diagnostico, tratamiento, notas)
       VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [cita_id, sintomas, diagnostico, tratamiento, notas],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );

const actualizarConsultaQuery = (id, campos) => {
  const keys = Object.keys(campos);
  if (!keys.length) return Promise.resolve(null);
  const setSql = keys.map((k, i) => `${k}=$${i + 1}`).join(', ');
  return new Promise((res, rej) =>
    pool.query(
      `UPDATE consultas SET ${setSql} WHERE id=$${keys.length + 1} RETURNING *`,
      [...Object.values(campos), id],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );
};

const eliminarConsultaQuery = id =>
  new Promise((res, rej) =>
    pool.query('DELETE FROM consultas WHERE id=$1 RETURNING *', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

export {
  listarTodasConsultasQuery,
  listarConsultaPorIdQuery,
  crearConsultaQuery,
  actualizarConsultaQuery,
  eliminarConsultaQuery,
};
