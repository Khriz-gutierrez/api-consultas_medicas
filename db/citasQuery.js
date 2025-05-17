import pool from '../config.js';

const listarTodasCitasQuery = () =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM citas', (e, r) => (e ? rej(e) : res(r.rows)))
  );

const listarCitaPorIdQuery = id =>
  new Promise((res, rej) =>
    pool.query('SELECT * FROM citas WHERE id=$1', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

const crearCitaQuery = ({ paciente_id, medico_id, fecha_hora, estado = 'programada' }) =>
  new Promise((res, rej) =>
    pool.query(
      `INSERT INTO citas (paciente_id, medico_id, fecha_hora, estado)
       VALUES ($1,$2,$3,$4) RETURNING *`,
      [paciente_id, medico_id, fecha_hora, estado],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );

const actualizarCitaQuery = (id, campos) => {
  const keys = Object.keys(campos);
  if (!keys.length) return Promise.resolve(null);
  const setSql = keys.map((k, i) => `${k}=$${i + 1}`).join(', ');
  return new Promise((res, rej) =>
    pool.query(
      `UPDATE citas SET ${setSql} WHERE id=$${keys.length + 1} RETURNING *`,
      [...Object.values(campos), id],
      (e, r) => (e ? rej(e) : res(r.rows[0]))
    )
  );
};

const eliminarCitaQuery = id =>
  new Promise((res, rej) =>
    pool.query('DELETE FROM citas WHERE id=$1 RETURNING *', [id], (e, r) =>
      e ? rej(e) : res(r.rows[0])
    )
  );

export {
  listarTodasCitasQuery,
  listarCitaPorIdQuery,
  crearCitaQuery,
  actualizarCitaQuery,
  eliminarCitaQuery,
};
