import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Routers de tu API de consultas médicas
import pacientesRouter  from './router/pacientesRouter.js';
import medicosRouter    from './router/medicosRouter.js';
import citasRouter      from './router/citasRouter.js';
import consultasRouter  from './router/consultasRouter.js';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints base
app.use('/pacientes',  pacientesRouter);
app.use('/medicos',    medicosRouter);
app.use('/citas',      citasRouter);
app.use('/consultas',  consultasRouter);

// fallback 404
app.use((_, res) => res.status(404).json({ success: false, message: 'Ruta no encontrada' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Servidor corriendo en el puerto ${port}`));
