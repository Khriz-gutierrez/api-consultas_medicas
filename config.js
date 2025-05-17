import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// ✔️ comprueba variables obligatorias
['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'DB_PORT'].forEach(v => {
  if (!process.env[v]) {
    throw new Error(`Missing environment variable: ${v}`);
  }
});

const pool = new Pool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port:     Number(process.env.DB_PORT),
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

// log de errores del pool
pool.on('error', err => console.error('❌ Pool error:', err));

// test rápido de conexión
(async () => {
  try {
    await pool.query('SELECT 1');
    if (process.env.NODE_ENV !== 'production') {
      console.log('✅ PostgreSQL connected');
    }
  } catch (e) {
    console.error('❌ Connection test failed:', e.message);
  }
})();

export default pool;

