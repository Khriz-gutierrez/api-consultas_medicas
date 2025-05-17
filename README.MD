API REST – Gestión de Consultas Médicas 🩺
API construida con Node.js + Express y base de datos PostgreSQL para administrar pacientes, médicos, citas y consultas médicas.
🗂️ Estructura del proyecto
api-consultas-medicas/
│
├── Controller/
│   ├── pacientesController.js
│   ├── medicosController.js
│   ├── citasController.js
│   └── consultasController.js
│
├── db/
│   ├── pacientesQuery.js
│   ├── medicosQuery.js
│   ├── citasQuery.js
│   └── consultasQuery.js
│
├── router/
│   ├── pacientesRouter.js
│   ├── medicosRouter.js
│   ├── citasRouter.js
│   └── consultasRouter.js
│
├── config.js          # Pool de PostgreSQL
├── index.js           # Punto de entrada Express
├── .env               # Variables de entorno (no subir a Git)
├── .gitignore
└── package.json
🚀 Instalación
# Clona el repositorio
git clone https://github.com/usuario/api-consultas-medicas.git
cd api-consultas-medicas

# Instala dependencias
npm install
Variables de entorno
Crea un archivo .env:
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tuPassword
DB_NAME=gestion_de_consultas
DB_SSL=false        # true si tu proveedor requiere SSL
NODE_ENV=development
🏁 Ejecución
# Desarrollo (con recarga automática)
npm run dev

# Producción
npm start
📋 Endpoints principales
| Recurso   | Ruta base    | Métodos                |
| --------- | ------------ | ---------------------- |
| Pacientes | `/pacientes` | GET, POST, PUT, DELETE |
| Médicos   | `/medicos`   | GET, POST, PUT, DELETE |
| Citas     | `/citas`     | GET, POST, PUT, DELETE |
| Consultas | `/consultas` | GET, POST, PUT, DELETE |
