import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }   // obligatorio en Render
});

pool.on('error', err => console.error('❌ Pool error:', err));

// test rápido
(async () => {
  try {
    await pool.query('SELECT 1');
    console.log('✅ PostgreSQL connected');
  } catch (e) {
    console.error('❌ Connection test failed:', e.message);
  }
})();

export default pool;

