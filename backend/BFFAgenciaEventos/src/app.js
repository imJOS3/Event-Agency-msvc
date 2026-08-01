require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

// Configurar CORS para permitir cookies si lo necesitas (opcional)
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

// Middleware para analizar JSON
app.use(express.json());

// Configurar sesiones
app.use(session({
  secret: 'tu_secreto_super_seguro', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // true si usas HTTPS
    maxAge: 1000 * 60 * 60, // 1 hora
  },
}));

// Importar rutas
const routes = require('./routes');
app.use('/', routes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`BFF ERP corriendo en http://localhost:${PORT}`);
});
